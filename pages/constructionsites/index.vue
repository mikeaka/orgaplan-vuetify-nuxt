<template>
  <v-container class="my-5" flex>
    <v-card
      v-for="chantier in constructionSites"
      :key="chantier.id"
      flat
      router
      :to="{
        name: 'constructionsites-id-singlesite',
        params: { id: chantier.id }
      }"
    >
      <v-layout row wrap :class="`pa-3 chantier ${chantier.status}`">
        <v-flex xs3 md3>
          <div class="caption grey--text">Nom du Chantier</div>
          <div>{{ chantier.siteName }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">localisation</div>
          <div>{{ chantier.location }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Duree du projet</div>
          <div>{{ chantier.projectDuration }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Reponsable du projet</div>
          <div>{{ chantier.responsible }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Status du projet</div>
          <div class="right">
            <v-chip
              small
              :class="`white--text caption my-2 chantier ${chantier.status} `"
              >{{ chantier.status }}</v-chip
            >
          </div>
        </v-flex>
        <!--
        <v-flex>
          <div class="caption grey--text">Actions</div>

          <EditConstructionSite :chantier="chantier" />
        </v-flex> -->
      </v-layout>
      <v-divider></v-divider>
    </v-card>

    <v-row align="center" class="ma-4">
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-btn class="mx-2" fab dark color="indigo" to="/constructionsites/new">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
// import EditConstructionSite from './_id/edit'

export default {
  name: 'ConstructionSites',

  components: {
    // EditConstructionSite
  },

  data: () => ({
    constructionSite: {
      siteName: '',
      location: '',
      projectDuration: '',
      responsible: ''
    }
  }),
  computed: {
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      // doneCount: 'doneTodosCount'
      constructionSites: 'loadConstructionSites'
    })
  },
  methods: {}
}
</script>

<style scoped>
.test {
  align-items: center;
  justify-content: center;
}
.chantier.terminee {
  border-left: 4px solid #3cd1c2;
}
.chantier.en-cours {
  border-left: 4px solid orange;
}
.chantier.depassement {
  border-left: 4px solid tomato;
}
.v-chip.terminee {
  background: #3cd1c2;
}
.v-chip.en-cours {
  background: orange;
}
.v-chip.depassement {
  background: tomato;
}
</style>
