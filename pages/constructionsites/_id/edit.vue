<template>
  <div>
    <v-dialog v-model="Adddialog" width="1000px" height="1000px" persistent>
      <template v-slot:activator="{ on }">
        <v-row>
          <v-icon small color="blue darken-2" class="v-button" v-on="on"
            >edit</v-icon
          >
          <v-icon small color="red" class="v-button" v-on="on">delete</v-icon>
        </v-row>
      </template>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step color="#004D40" :complete="e1 > 1" step="1"
            >Parametre de base</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step color="#004D40" :complete="e1 > 2" step="2"
            >zones de livraison et moyens</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step color="#004D40" step="3" :complete="e1 > 3"
            >Fournisseurs</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step color="#004D40" step="4" :complete="e1 > 4"
            >Entreprises</v-stepper-step
          >
        </v-stepper-header>

        <v-stepper-items>
          {{ chantier }}
          <v-stepper-content step="1">
            <v-card class="mb-7" color="blue-grey lighten-5" height="355px">
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedConstructionSite.siteName"
                    class="ml-3 mt-0 pt-1"
                    label="Nom du chantier*"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="editedConstructionSite.address"
                    class="ml-3 mt-0 pt-1"
                    label="Adresse du chantier*"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedConstructionSite.postalCode"
                    class="ml-3 mt-0 pt-0"
                    label="Code Postal*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="editedConstructionSite.location"
                    class="ml-3 mt-0 pt-0"
                    label="Ville*"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedConstructionSite.projectDuration"
                    class="ml-3"
                    label="Duree du chantier*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedConstructionSite.responsible"
                    class="ml-3"
                    label="Responsable chantier*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="3" sm="3" md="2">
                  <v-text-field
                    v-model="editedConstructionSite.active"
                    class="ml-3"
                    label="Valide*"
                    hint="true or false"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="10">
                  <v-text-field
                    v-model="editedConstructionSite.imageUrl"
                    class="ml-3"
                    label="Plan du chantier*"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card>

            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-7" color="blue-grey lighten-5" height="355px">
              <v-row>
                <v-col cols="11" class="ml-3">
                  <v-autocomplete
                    v-model="editedDeliveryAreas"
                    :items="siteDeliveryAreas"
                    label="Selectionner les zones de livraison"
                    item-text="name"
                    item-value="name"
                    multiple
                    chips
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
                <v-col cols="11" class="ml-3">
                  <v-autocomplete
                    v-model="editedSiteMaterials"
                    :items="siteMaterials"
                    label="Selectionner les moyens"
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
                <v-col cols="11" class="ml-3">
                  <v-autocomplete
                    v-model="editedProviders"
                    :items="siteProviders"
                    label="Selectionner les fournisseurs"
                    item-text="compagnyName"
                    item-value="compagnyName"
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
              </v-row>
            </v-card>

            <v-btn text outlined @click.native="e1 = 1">Precedent</v-btn>

            <v-btn color="primary" @click="e1 = 3">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-7" color="grey lighten-1" height="355px"></v-card>

            <v-btn text outlined @click.native="e1 = 2">Precedent</v-btn>

            <v-btn color="primary" @click="e1 = 4">
              Continue
            </v-btn>

            <v-btn text @click="e1 = 0">Cancel</v-btn>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn text outlined @click.native="e1 = 3">Precedent</v-btn>
            <v-btn color="primary" @click.prevent="submit">Sauvegarder</v-btn>
            <v-btn text @click="e1 = 0">Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EditConstructionSite',
  props: {
    chantier: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      Adddialog: false,
      e1: 1,
      id: this.$route.params.id,
      // id: this.chantier,
      editedIndex: -1,
      editedConstructionSite: {
        chantierid: this.chantier.id
        // siteName: this.chantier.siteName
        // siteName: this.chantier.findEditedConstructionSite.siteName
        // imageUrl: this.chantier.findEditedConstructionSite.imageUrl,
        // active: this.chantier.findEditedConstructionSite.active,
        // status: this.chantier.findEditedConstructionSite.status,
        // address: this.chantier.findEditedConstructionSite.address,
        // postalCode: this.chantier.findEditedConstructionSite.postalCode,
        // location: this.chantier.findEditedConstructionSite.location,
        // projectDuration: this.chantier.findEditedConstructionSite
        //   .projectDuration,
        // responsible: this.chantier.findEditedConstructionSite.responsible
      },
      editedDeliveryAreas: '',
      editedSiteMaterials: '',
      editedProviders: ''
    }
  },

  computed: {
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      // doneCount: 'doneTodosCount'
      siteDeliveryAreas: 'loadDeliveryAreas',
      siteMaterials: 'loadSiteMaterials',
      siteProviders: 'loadSiteProviders',
      editConstructionSiteId: 'loadConstructionSiteById'
    })
    // findEditedConstructionSite() {
    //   return this.editConstructionSiteId(this.id)
    // }
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    // call again the method if the route changes
    $route: 'fetchData'
  },
  created() {
    this.fetchData()
  },

  mounted() {
    console.log(this.chantier.findEditedConstructionSite.siteName)
  },
  methods: {
    // reset() {
    //   this.$refs.form.reset()
    // },
    fetchData() {
      return this.chantier
    }
  }
}
</script>

<style scoped>
.card {
  justify-content: center;
  align-items: center;
}
.v-button {
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.containerrrr {
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
