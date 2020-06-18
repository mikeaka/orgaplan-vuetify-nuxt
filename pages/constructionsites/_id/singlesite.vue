<template>
  <v-app>
    <v-container>
      <v-flex x12>
        <v-card>
          <v-card-title>
            <h4 class="primary--text">
              Details pour le chantier {{ findEditedConstructionSite.siteName }}
            </h4>
            <v-spacer></v-spacer>
            <EditConstructionSite :chantier="{ findEditedConstructionSite }" />
          </v-card-title>

          <v-divider></v-divider>
          <v-layout row wrap class="ma-3">
            <v-flex xs6 sm4 md2 class="ma-3">
              <v-textarea
                v-model="findEditedConstructionSite.address"
                :disabled="true"
                label="Adresse Postale"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
            </v-flex>
            <v-flex xs6 sm4 md2 class="ma-3">
              <v-textarea
                v-model="findEditedConstructionSite.postalCode"
                :disabled="true"
                label="Code Postale"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
            </v-flex>
            <v-flex xs6 sm4 md2 class="ma-3">
              <v-textarea
                v-model="findEditedConstructionSite.location"
                :disabled="true"
                label="Ville"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
            </v-flex>
            <v-flex xs6 sm4 md2 class="ma-3">
              <v-textarea
                v-model="findEditedConstructionSite.projectDuration"
                :disabled="true"
                label="Duree Chantier"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
            </v-flex>
            <v-flex xs6 sm4 md2 class="ma-3">
              <v-textarea
                v-model="findEditedConstructionSite.active"
                :disabled="true"
                label="Validite"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs12 class="ma-3">
              <v-textarea
                v-model="findEditedConstructionSite.imageUrl"
                :disabled="true"
                label="URL du Plan Chantier"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
            </v-flex>
            <v-flex xs12 class="ma-3">
              <v-textarea
                v-model="findEditedConstructionSite.responsible"
                :disabled="true"
                label="Nom du responsable Chantier"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap class="ma-2">
            <h4 class="primary--text">
              Zone de livraison affectes au chantier
            </h4>
            <v-flex
              flex-direction:
              row
              class="mt-5"
              justify-content:
              flex-start
            >
              <br />
              <v-list v-for="area in deliveryAreasByCsId" :key="area.id">
                <v-chip class="ma-2" color="#022d30" outlined>
                  <v-icon left>mdi-server-plus</v-icon>
                  <v-list-item> {{ area.name }} </v-list-item>
                </v-chip>
              </v-list>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap class="ma-3">
            <h4 class="primary--text">
              Materiels affectes au chantier
            </h4>
            <v-flex
              flex-direction:
              row
              class="mt-5"
              justify-content:
              flex-start
            >
              <v-list
                v-for="material in siteMaterialsByCsId"
                :key="material.id"
              >
                <v-chip class="ma-2" color="#022d30" outlined>
                  <v-icon left>mdi-wrench</v-icon>
                  <v-list-item> {{ material.name }} </v-list-item>
                </v-chip>
              </v-list>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap class="ma-3">
            <h4 class="primary--text">
              Entreprises affectes au chantier
            </h4>
            <v-flex
              flex-direction:
              row
              class="mt-5"
              justify-content:
              flex-start
            >
              <v-list v-for="compagny in compagnyByCsName" :key="compagny.id">
                <v-chip class="ma-2" color="#022d30" outlined>
                  <v-icon left>mdi-wrench</v-icon>
                  <v-list-item> {{ compagny.name }} </v-list-item>
                </v-chip>
              </v-list>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap class="ma-3">
            <h4 class="primary--text">
              Fournisseurs affectes au chantier
            </h4>
            <v-flex
              flex-direction:
              row
              class="mt-5"
              justify-content:
              flex-start
            >
              <v-list v-for="provider in siteProvider" :key="provider.id">
                <v-chip class="ma-2" color="#022d30" outlined>
                  <v-icon left>mdi-wrench</v-icon>
                  <v-list-item> {{ provider.providerName }} </v-list-item>
                </v-chip>
              </v-list>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap class="ma-3">
            <h4 class="primary--text">
              Casiers affectes au chantier
            </h4>
            <v-flex
              flex-direction:
              row
              class="mt-5"
              justify-content:
              flex-start
            >
              <v-list v-for="locker in lockersByCsId" :key="locker.id">
                <v-chip class="ma-2" color="#022d30" outlined>
                  <v-icon left>mdi-wrench</v-icon>
                  <v-list-item> {{ locker.name }} </v-list-item>
                </v-chip>
              </v-list>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import EditConstructionSite from './edit'
export default {
  name: 'SingleSite',
  components: {
    EditConstructionSite
  },
  props: {},
  data() {
    return {
      id: this.$route.params.id,
      editedConstructionSite: {
        // siteName: this.findEditedConstructionSite.siteName
        // imageUrl: this.findEditedConstructionSite.imageUrl,
        // active: this.findEditedConstructionSite.active,
        // status: this.findEditedConstructionSite.status,
        // address: this.findEditedConstructionSite.address,
        // postalCode: this.findEditedConstructionSite.postalCode,
        // location: this.findEditedConstructionSite.location,
        // projectDuration: this.findEditedConstructionSite.projectDuration,
        // responsible: this.findEditedConstructionSite.responsible
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
      editConstructionSiteId: 'loadConstructionSiteById',
      loadSiteMaterialsByCsId: 'loadSiteMaterialsByCsId',
      loadDeliveryAreasByCsId: 'loadDeliveryAreasByCsId',
      loadLockersByCsId: 'loadLockersByCsId',
      loadSiteProvider: 'loadSiteProvider',
      loadCompagnyByCsName: 'loadCompagnyByCsName'
    }),
    findEditedConstructionSite() {
      return this.editConstructionSiteId(this.id)
    },
    deliveryAreasByCsId() {
      return this.loadDeliveryAreasByCsId(this.id)
    },
    siteMaterialsByCsId() {
      return this.loadSiteMaterialsByCsId(this.id)
    },
    lockersByCsId() {
      return this.loadLockersByCsId(this.id)
    },
    siteProvider() {
      return this.loadSiteProvider(this.id)
    },
    compagnyByCsName() {
      return this.loadCompagnyByCsName(this.id)
    }
  },
  created() {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>
.container {
  display: flex; /* or inline-flex */
  flex-direction: row;
}
.flex {
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 5;
}
.background {
  background-image: url('https://www.xmple.com/wallpaper/blue-gradient-grey-linear-1920x1080-c2-add8e6-c0c0c0-a-75-f-14.svg')
    no-repeat center center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  transform: scale(1.1);
}
</style>
