<template>
  <v-dialog v-model="Adddialog" width="700px" persistent>
    <template v-slot:activator="{ on }">
      <v-btn outlined color="primary" dark right v-on="on">
        Ajouter une zone de livraison
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Ajouter une zone de Livraison</span>
      </v-card-title>
      <v-card-text>
        <form ref="form" @submit.prevent="addDeliveryArea">
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="addNewDeliveryArea.name"
                  :rules="nameRules"
                  label="Nom de la zone*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="addNewDeliveryArea.floornumber"
                  :rules="numberRules"
                  label="Nombre(s) d'Etage(s) *"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="addNewDeliveryArea.floorname"
                  :rules="nameRules"
                  label="Nom de(s) l'Etage(s) *"
                  placeholder="Separer les nom par une virgule"
                  required
                ></v-text-field>
              </v-col>
              <!-- chantier a affecter selon la liste des chantiers deja enregistres-->
              <v-col cols="12">
                <v-autocomplete
                  v-model="addNewDeliveryArea.affectedconstructionsite"
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
                  v-model="addNewDeliveryArea.defaultmaterials"
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
                  v-model="addNewDeliveryArea.active"
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
          >Ajouter</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AddNewDeliveryArea',
  data() {
    return {
      Adddialog: false,

      // add DeliveryArea
      addIndex: -1,
      addNewDeliveryArea: {
        id: '',
        name: '',
        floornumber: '',
        floorname: '',
        defaultmaterials: '',
        affectedconstructionsite: '',
        active: ''
      },

      // initialiased and secured data input
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
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      // doneCount: 'doneTodosCount'
      deliveryAreas: 'loadDeliveryAreas',
      constructionSites: 'loadConstructionSites',
      siteMaterials: 'loadSiteMaterials'
    }),
    formIsValid() {
      return (
        this.addNewDeliveryArea.name !== '' &&
        this.addNewDeliveryArea.floornumber !== '' &&
        this.addNewDeliveryArea.floorname !== '' &&
        this.addNewDeliveryArea.defaultmaterials !== '' &&
        this.addNewDeliveryArea.affectedconstructionsite !== '' &&
        this.addNewDeliveryArea.active !== ''
      )
    }
    // constructionSites() {
    //   return this.$store.getters.loadConstructionSites
    // },
    // siteMaterials() {
    //   return this.$store.getters.loadSiteMaterials
    // },
    // deliveryAreas() {
    //   return this.$store.getters.loadDeliveryAreas
    // }
  },
  watch: {
    Adddialog(val) {
      val || this.close()
    }
  },
  methods: {
    addDeliveryArea() {
      if (this.editedIndex > -1) {
        Object.assign(this.deliveryAreas[this.editedIndex], this.deliveryAreas)
        this.Adddialog = false
      } else {
        const deliveryAreaData = {
          name: this.addNewDeliveryArea.name,
          floornumber: this.addNewDeliveryArea.floornumber,
          floorname: this.addNewDeliveryArea.floorname,
          defaultmaterials: this.addNewDeliveryArea.defaultmaterials,
          affectedconstructionsite: this.addNewDeliveryArea
            .affectedconstructionsite,
          active: this.addNewDeliveryArea.active
        }
        this.$store.dispatch('addDeliveryArea', deliveryAreaData)
        this.Adddialog = false
      }
    },

    close() {
      this.Adddialog = false
      this.$nextTick(() => {
        this.editedIndex = -1
      })
    }
  }
}
</script>

<style scoped></style>
