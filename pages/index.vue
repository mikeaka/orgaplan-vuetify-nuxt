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
              v-for="deliveryArea in deliveryAreas"
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
            <v-list-item v-for="materiel in siteMaterials" :key="materiel.id">
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
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      siteSelection: '',
      deliveryAreas: [
        { id: 'sssss', name: 'Auto-Sous Sol 1', active: true },
        { id: 'xxxxx', name: 'Auto-Sous Sol 2', active: true },
        { id: 'wwwww', name: 'Centrale T1:T2', active: true }
      ],
      constructionSites: [
        {
          id: 'azertyui',
          siteName: 'Chantier1',
          imageUrl:
            'http://www.oeecentre.fr/wp-content/uploads/2019/11/Confluence-PIC-800-1.png',
          active: true
        },
        {
          id: 'azertysdsdqui',
          siteName: 'Chantier2',
          imageUrl:
            'http://www.oeecentre.fr/wp-content/uploads/2018/05/Lily-of-the-Valley-PIC-3-6-1200.gif',
          active: true
        },
        {
          id: 'azeqsdqsdqrtyui',
          siteName: 'Chantier3',
          imageUrl:
            'http://www.oeecentre.fr/wp-content/uploads/2018/05/Vista-PIC-3-6-1200.gif',
          active: true
        }
      ],
      siteMaterials: [
        { id: 'fffff', name: 'LIFT 01', active: true },
        { id: 'hhhhh', name: 'LIFT 02', active: true },
        { id: 'kkkkk', name: 'Chariot Elevateur T1 RDC', active: true },
        { id: 'mmmmm', name: 'Chariot Elevateur T1', active: true }
      ]
    }
  },
  methods: {}
}
</script>
