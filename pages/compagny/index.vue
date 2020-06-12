<template>
  <div>
    <v-container class="my-5" fluid>
      <v-data-table :headers="headers" :items="compagny" class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Liste des Entreprises</v-toolbar-title>
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
                    Ajouter une Entreprise</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Creer une Entreprise</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Nom de l entreprise*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Address*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Code Postal*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Numero de Telephone*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <!-- chantier a affecter selon la liste des chantiers deja enregistres-->
                        <v-col cols="12">
                          <v-autocomplete
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

                        <v-col cols="12">
                          <v-text-field
                            label="Actif*"
                            required
                            placeholder="true ou false"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indique les champs obligatoires</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false"
                      >Close</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="dialog = false"
                      >Save</v-btn
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
  name: 'Compagny',

  data: () => ({
    dialog: false,

    headers: [
      {
        text: 'Nom Entreprise',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'Adresse', value: 'address' },
      { text: 'Code Postal', value: 'postalcode' },
      { text: 'email', value: 'email' },
      { text: 'telephone', value: 'phonenumber' },
      { text: 'Chantier Affecte', value: 'affectedconstructionsite' },
      { text: 'Actif', value: 'active' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],

    methods: {
      editItem() {},

      deleteItem() {}
    }
  }),
  computed: {
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
    },
    compagny() {
      return this.$store.state.compagny
    }
  }
}
</script>
