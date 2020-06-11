<template>
  <div>
    <v-container class="my-5" fluid>
      <v-data-table
        :headers="headers"
        :items="siteProviders"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Liste des Fournisseurs</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>

            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn class="mb-2" color="primary" dark v-on="on"
                    >Ajouter un Fournisseur</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Creer un Fournisseur</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Nom Societe*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Nom Fournisseur*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            label="Adresse*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Contacts*"
                            required
                          ></v-text-field>
                        </v-col>

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
                          <v-text-field label="Actif*" required></v-text-field>
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
          <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
          <v-icon small @click="deleteItem(item)">delete</v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Providers',

  data: () => ({
    dialog: false,

    headers: [
      {
        text: 'Societe',
        align: 'start',
        sortable: false,
        value: 'compagnyName'
      },
      { text: 'Nom Fournisseurs', value: 'providerName' },
      { text: 'Adresse', value: 'address' },
      { text: 'Email', value: 'email' },
      { text: 'Contacts', value: 'contacts' },
      { text: 'Actif', value: 'enabled' }
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
    }
  }
}
</script>
