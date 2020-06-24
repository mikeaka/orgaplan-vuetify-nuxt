<template>
  <v-container fluid>
    <v-layout row wrap align-center justify-center fill-height>
      <v-container class="mt-1" fluid>
        <v-flex xs12 sm6 md3 class="ma-1">
          <v-card color="#385F73" dark width="200" height="95">
            <v-card-title class="body-2 font-weight-bold"
              >En attente de validation</v-card-title
            >

            <v-card-subtitle class="body-2"
              >281 livraisons en attente de validation</v-card-subtitle
            >
          </v-card>
          <!-- <v-card width="60" height="60" elevation="12" class="littlecard">
          <v-img
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="60px"
            :src="logo"
          />
        </v-card> -->
        </v-flex>
        <v-flex xs12 sm6 md3 class="ma-1">
          <v-card color="#385F73" dark width="200" height="95">
            <v-card-title class="body-2 font-weight-bold">Validee</v-card-title>

            <v-card-subtitle class="body-2"
              >3398 livraisons validee</v-card-subtitle
            >
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 class="ma-1">
          <v-card color="#385F73" dark width="200" height="95">
            <v-card-title class="body-2 font-weight-bold"
              >En attente de realisation</v-card-title
            >
            <v-card-subtitle class="body-2"
              >3238 demandes en attente de validation</v-card-subtitle
            >
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3 class="ma-1">
          <v-card color="#385F73" dark width="200" height="95">
            <v-card-title class="body-2 font-weight-bold"
              >Effectuer</v-card-title
            >

            <v-card-subtitle class="body-2"
              >160 livraisons effecuees</v-card-subtitle
            >
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap>
      <v-container>
        <v-card width="1000">
          <v-card-title>
            Nutrition
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-container>
    </v-layout>
  </v-container>
</template>

<style scoped>
.vhcard {
  min-width: '250';
  min-height: '250';
  max-width: '250';
  max-height: '250';
}
.container {
  display: flex; /* or inline-flex */
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 1%;
}
.littlecard {
  position: absolute;
  top: 20px;
  left: 80px;
}
</style>

<script>
export default {
  data() {
    return {
      logo: require('@/assets/logo.png'),

      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  },
  head: {
    title: 'Orgaplan Historique'
  }
}
</script>
