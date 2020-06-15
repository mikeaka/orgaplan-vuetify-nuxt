<template>
  <v-container class="grey lighten-5 v-layout" fluid>
    <v-layout row justify-center>
      <div class="text-center ma-5">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn class="ma-2" text left color="primary" dark v-on="on">
              <v-icon>expand_more</v-icon>
              <span>Choisir un Chantier</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="chantier in constructionSites"
              :key="chantier.id"
              @click="siteSelection = chantier.siteName"
            >
              <v-list-item-title>{{ chantier.siteName }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-flex>
          <p v-if="siteSelection">
            Vous avez selectionner
            <strong class="red--text text--lighten-1">{{
              siteSelection
            }}</strong>
          </p>
          <p v-if="!siteSelection">Veuillez choisir un chantier</p>
        </v-flex>
      </div>
    </v-layout>
    <div v-for="chantier in constructionSites" :key="chantier.id">
      <v-layout
        v-if="siteSelection === chantier.siteName"
        class="ma-1"
        row
        justify-space-between
      >
        <v-flex class="mt-6">
          <v-card class="text-xs-center pa-2" max-width="350" width="340" flat>
            <v-card-title class="text-xs-center justify-center"
              >Aire de Livraison</v-card-title
            >
            <v-list-item
              v-for="deliveryArea in filteredDeliveryAreas"
              :key="deliveryArea.id"
            >
              <v-btn
                block
                color="primary"
                outlined
                :disabled="!deliveryArea.active"
                >{{ deliveryArea.name }}</v-btn
              >
            </v-list-item>
          </v-card>

          <v-card class="text-xs-center mt-4" max-width="344" width="340" flat>
            <v-card-title class="text-xs-center justify-center"
              >Materiels Disponible</v-card-title
            >
            <v-list-item
              v-for="materiel in filteredMaterials"
              :key="materiel.id"
            >
              <v-btn
                block
                color="primary"
                outlined
                :disabled="!materiel.active"
                >{{ materiel.name }}</v-btn
              >
            </v-list-item>
          </v-card>
        </v-flex>
        <v-flex>
          <div class="title mb-1" align="center">Plan Chantier</div>
          <v-card class="mx-auto" flat>
            <v-img
              :src="chantier.imageUrl"
              class="white--text align-end"
              height="600px"
              width="600px"
            >
              <v-card-title>Chantier</v-card-title>
              <v-btn color="secondary">zone de livraison</v-btn>
              <v-btn color="purple" dark small absolute top right
                >zone de livraison 2</v-btn
              >
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<style scoped>
.v-layout {
  height: 5rem;
  align-items: center;
  justify-content: center;
}
</style>

<script>
// import { mapState, mapMutations, mapGetters } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  props: {},
  data() {
    return {
      siteSelection: ''
    }
  },

  computed: {
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      // doneCount: 'doneTodosCount'
      deliveryAreas: 'loadDeliveryAreas',
      constructionSites: 'loadConstructionSites',
      siteMaterials: 'loadSiteMaterials',
      loadDeliveryAreasByCsName: 'loadDeliveryAreasByCsName',
      loadSiteMaterialsByCsName: 'loadSiteMaterialsByCsName'
    }),

    // deliveryAreaByCsName() {
    //   return this.$store.getters.loadDeliveryAreaByCsName
    // },
    filteredDeliveryAreas() {
      return this.loadDeliveryAreasByCsName(this.siteSelection)
    },
    filteredMaterials() {
      return this.loadSiteMaterialsByCsName(this.siteSelection)
    }
    // deliveryAreas() {
    //   return this.$store.getters.loadDeliveryAreas
    // },
    // constructionSites() {
    //   return this.$store.getters.loadConstructionSites
    // },
    // siteMaterials() {
    //   return this.$store.getters.loadSiteMaterials
    // }
  },
  mounted() {
    // this.filtered = this.filteredAreas
    // console.log(this.filtered)
  },

  methods: {}
}
</script>
