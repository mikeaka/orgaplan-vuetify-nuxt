<template>
  <div>
    <v-container class="my-5" fluid>
      <v-data-table
        :headers="headers"
        :items="deliveryAreas"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Liste des Zones de livraison</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>

            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="700px">
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="mb-2"
                    outlined
                    color="primary"
                    dark
                    right
                    v-on="on"
                  >
                    Ajouter une zone de livraison</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Creer une zone de livraison</span>
                  </v-card-title>
                  <v-card-text>
                    <form @submit.prevent="addDeliveryArea">
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="name"
                              :rules="nameRules"
                              label="Nom de la zone*"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="floornumber"
                              :rules="numberRules"
                              label="Nombre(s) d'Etage*"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="floorname"
                              :rules="nameRules"
                              label="Nom de l'Etage*"
                              placeholder="si plusieurs etages separer le nom par ,"
                              required
                            ></v-text-field>
                          </v-col>
                          <!-- chantier a affecter selon la liste des chantiers deja enregistres-->
                          <v-col cols="12">
                            <v-autocomplete
                              v-model="affectedconstructionsite"
                              :rules="itemRules"
                              :items="constructionSites"
                              label="Selectionner Chantier"
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
                              v-model="defaultmaterials"
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
                              v-model="active"
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
                    <v-btn color="blue darken-1" text @click="dialog = false"
                      >Close</v-btn
                    >
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
            </v-row>
          </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            color="blue darken-2"
            class="mr-2"
            @click="editItem(item)"
            >edit</v-icon
          >
          <v-icon small color="red" @click="deleteItem(item)">delete</v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'DeliveryAreas',

  data: () => ({
    dialog: false,

    deliveryArea: '',
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    itemRules: [(v) => !!v || 'Name is required'],
    numberRules: [
      (v) =>
        !!v.toString().match(/^[0-9]+(\.?[0-9]+)?$/) || 'Number is required'
    ],
    floornumber: '',
    floorname: '',
    defaultmaterials: '',
    affectedconstructionsite: '',
    active: '',

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
    formIsValid() {
      return (
        this.name !== '' &&
        this.floornumber !== '' &&
        this.floorname !== '' &&
        this.defaultmaterials !== '' &&
        this.affectedconstructionsite !== '' &&
        this.active !== ''
      )
    },

    siteProviders() {
      return this.$store.state.siteProviders
    },
    constructionSites() {
      return this.$store.state.constructionSites
    },
    siteMaterials() {
      return this.$store.state.siteMaterials
    },
    deliveryAreas() {
      return this.$store.state.deliveryAreas
    }
  },

  methods: {
    addDeliveryArea() {
      // if (this.deliveryArea) {
      //   // this.deliveryAreas.push(this.deliveryArea)
      //   // this.dialog = false
      //   // this.$store.commit('addDeliveryArea', this.deliveryArea)
      //   // this.deliveryArea = ''
      // }
      const deliveryAreaData = {
        name: this.name,
        floornumber: this.floornumber,
        floorname: this.floorname,
        defaultmaterials: this.defaultmaterials,
        affectedconstructionsite: this.affectedconstructionsite,
        active: this.active
      }
      this.$store.dispatch('addDeliveryArea', deliveryAreaData)
      this.dialog = false
    },
    editItem() {},

    deleteItem() {}
  }
}
</script>
