<template>
  <div>
    <v-container class="my-5" fluid>
      <v-data-table
        :id="deliveryAreas.id"
        :headers="headers"
        :items="deliveryAreas"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Liste des Zones de livraison</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <template>
              <v-spacer></v-spacer>
              <AddNewDeliveryArea />
            </template>
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="700px">
                <v-card>
                  <v-card-title>
                    <span class="headline">Editer la zone de livraison</span>
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
                              v-model="
                                editedDeliveryArea.affectedconstructionsite
                              "
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
                    <v-btn color="blue darken-1" text @click="close()"
                      >Close</v-btn
                    >

                    <v-btn
                      color="blue darken-1"
                      text
                      :disabled="!formIsValid"
                      type="submit"
                      @click="onSaveChanges()"
                      >{{ formButton }}</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            color="blue darken-2"
            class="mr-2"
            @click="editDeliveryArea(item)"
            >edit</v-icon
          >

          <v-icon small color="red" @click="deleteDeliveryArea(item)"
            >delete</v-icon
          >
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import AddNewDeliveryArea from './add'
export default {
  name: 'DeliveryAreas',
  components: {
    AddNewDeliveryArea
  },
  data: () => ({
    dialog: false,

    // initialiased and secured data input
    // name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 20 || 'Name must be less than 20 characters'
    ],
    itemRules: [(v) => !!v || 'Name is required'],
    numberRules: [
      (v) =>
        !!v.toString().match(/^[0-9]+(\.?[0-9]+)?$/) || 'Number is required'
    ],
    // floornumber: '',
    // floorname: '',
    // defaultmaterials: '',
    // affectedconstructionsite: '',
    // active: '',

    // used to edit delivery area
    editedIndex: -1,
    editedDeliveryArea: {
      id: '',
      name: '',
      floornumber: '',
      floorname: '',
      defaultmaterials: '',
      affectedconstructionsite: '',
      active: ''
    },

    // Headers for data rendering
    headers: [
      {
        text: 'Nom de la Zone de livraison',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'Nombre etage', value: 'floornumber' },
      { text: 'Nom de Etage', value: 'floorname' },
      { text: 'Materiel Obligatoire', value: 'defaultmaterials' },
      { text: 'Chantier attache', value: 'affectedconstructionsite' },

      { text: 'Actif', value: 'active' },
      { text: 'Actions', value: 'actions', sortable: false }
    ]
  }),
  computed: {
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

    // siteProviders() {
    //   return this.$store.state.siteProviders
    // },
    constructionSites() {
      return this.$store.getters.loadConstructionSites
    },
    siteMaterials() {
      return this.$store.getters.loadSiteMaterials
    },
    deliveryAreas() {
      return this.$store.getters.loadDeliveryAreas
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    }
  },

  methods: {
    // reset() {
    //   this.$refs.form.reset()
    // },
    // addDeliveryArea() {
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.deliveryAreas[this.editedIndex], this.deliveryAreas)
    //     this.dialog = false
    //   } else {
    //     const deliveryAreaData = {
    //       name: this.editedDeliveryArea.name,
    //       floornumber: this.editedDeliveryArea.floornumber,
    //       floorname: this.editedDeliveryArea.floorname,
    //       defaultmaterials: this.editedDeliveryArea.defaultmaterials,
    //       affectedconstructionsite: this.editedDeliveryArea
    //         .affectedconstructionsite,
    //       active: this.editedDeliveryArea.active
    //     }
    //     this.$store.dispatch('addDeliveryArea', deliveryAreaData)
    //     this.dialog = false
    //   }
    // },
    editDeliveryArea(item) {
      this.editedIndex = this.deliveryAreas.indexOf(item)
      this.editedDeliveryArea = Object.assign({}, item)
      this.dialog = true
    },
    onSaveChanges() {
      this.dialog = false
      this.$store.dispatch('updateDeliveryAreaData', {
        id: this.editedDeliveryArea.id,
        name: this.editedDeliveryArea.name,
        floornumber: this.editedDeliveryArea.floornumber,
        floorname: this.editedDeliveryArea.floorname,
        defaultmaterials: this.editedDeliveryArea.defaultmaterials,
        affectedconstructionsite: this.editedDeliveryArea
          .affectedconstructionsite,
        active: this.editedDeliveryArea.active
      })
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
