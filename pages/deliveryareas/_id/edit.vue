<template>
  <div>
    <v-dialog width="350px" persistent>
      <template v-slot:activator="{ on }">
        <v-btn floating accent>
          <v-icon small color="blue darken-2" v-on="on">edit</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <form ref="form" @submit.prevent="addDeliveryArea">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedDeliveryArea.name"
                    :rules="nameRules"
                    label="Nom de la zone*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedDeliveryArea.floornumber"
                    :rules="numberRules"
                    label="Nombre(s) d'Etage(s) *"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedDeliveryArea.floorname"
                    :rules="nameRules"
                    label="Nom de(s) l'Etage(s) *"
                    placeholder="Separer les nom par une virgule"
                    required
                  ></v-text-field>
                </v-col>
                <!-- chantier a affecter selon la liste des chantiers deja enregistres-->
                <v-col cols="12">
                  <v-autocomplete
                    v-model="editedDeliveryArea.affectedconstructionsite"
                    :rules="itemRules"
                    :items="constructionSites"
                    label="Selectionner un Chantier"
                    item-text="siteName"
                    item-value="siteName"
                    multiple
                  >
                    <template v-slot:selection="data">
                      <template v-if="typeof data.item !== 'object'">
                        <v-list-item-content
                          v-text="data.item"
                        ></v-list-item-content>
                      </template>
                      <v-list-item-content>
                        <v-list-item-title
                          v-html="data.item.siteName"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-autocomplete>
                </v-col>

                <!-- Materiel a affecter selon la liste des chantiers deja enregistres-->
                <v-col cols="12">
                  <v-autocomplete
                    v-model="editedDeliveryArea.defaultmaterials"
                    :rules="itemRules"
                    :items="siteMaterials"
                    label="Selectionner les moyens pour le chantier"
                    item-text="name"
                    item-value="name"
                    multiple
                  >
                    <template v-slot:selection="data">
                      <template v-if="typeof data.item !== 'object'">
                        <v-list-item-content
                          v-text="data.item"
                        ></v-list-item-content>
                      </template>
                      <v-list-item-content>
                        <v-list-item-title
                          v-html="data.item.name"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-autocomplete>
                </v-col>

                <v-col cols="12">
                  <v-select
                    v-model="editedDeliveryArea.active"
                    :items="['true', 'false']"
                    label="Actif*"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
            <small>*indique les champs obligatoires</small>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close()">Close</v-btn>
          <v-btn
            color="blue darken-1"
            text
            :disabled="!formIsValid"
            type="submit"
            @click="addDeliveryArea()"
            >{{ formButton }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'EditDeliveryArea',
  data() {
    return {
      dialog: false,
      id: this.$route.params.id,
      editedIndex: -1,
      editedDeliveryArea: {
        id: this.id,
        name: '',
        floornumber: '',
        floorname: '',
        defaultmaterials: '',
        affectedconstructionsite: '',
        active: ''
      },
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 20 || 'Name must be less than 20 characters'
      ],
      itemRules: [(v) => !!v || 'Name is required'],
      numberRules: [
        (v) =>
          !!v.toString().match(/^[0-9]+(\.?[0-9]+)?$/) || 'Number is required'
      ]
    }
  },

  computed: {
    deliveryAreas(context) {
      return this.$store.getters.loadConstructionSite(context.params.id)
    },
    formTitle() {
      return this.editedIndex === -1
        ? 'Creer une zone de livraison'
        : 'Editer une zone de livraison'
    },
    formButton() {
      return this.editedIndex === -1 ? 'Ajouter' : 'Sauver'
    },
    formIsValid() {
      return (
        this.editedDeliveryArea.name !== '' &&
        this.editedDeliveryArea.floornumber !== '' &&
        this.editedDeliveryArea.floorname !== '' &&
        this.editedDeliveryArea.defaultmaterials !== '' &&
        this.editedDeliveryArea.affectedconstructionsite !== '' &&
        this.editedDeliveryArea.active !== ''
      )
    },
    constructionSites() {
      return this.$store.getters.loadConstructionSites
    },
    siteMaterials() {
      return this.$store.getters.loadSiteMaterials
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    }
  },

  mounted() {},
  methods: {
    // reset() {
    //   this.$refs.form.reset()
    // },
    addDeliveryArea() {
      if (this.editedIndex > -1) {
        Object.assign(this.deliveryAreas[this.editedIndex], this.deliveryAreas)
      } else {
        const deliveryAreaData = {
          name: this.editedDeliveryArea.name,
          floornumber: this.editedDeliveryArea.floornumber,
          floorname: this.editedDeliveryArea.floorname,
          defaultmaterials: this.editedDeliveryArea.defaultmaterials,
          affectedconstructionsite: this.editedDeliveryArea
            .affectedconstructionsite,
          active: this.editedDeliveryArea.active
        }
        this.$store.dispatch('addDeliveryArea', deliveryAreaData)
        this.dialog = false
      }
    },
    editDeliveryArea(item) {
      this.editedIndex = this.deliveryAreas.indexOf(item)
      this.editedDeliveryArea = Object.assign({}, item)
      this.dialog = true
    },

    deleteDeliveryArea(item) {
      const index = this.deliveryAreas.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        // this.deliveryAreas.splice(index, 1)
        this.$store.commit('deleteDeliveryArea', index)
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedIndex = -1
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
