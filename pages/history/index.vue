<template>
  <v-container fluid class="mt-2">
    <v-layout row wrap fill-height>
      <v-flex xs12 sm6 md3 class="pa-1">
        <v-card color="#385F73" dark height="95">
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
      <v-flex xs12 sm6 md3 class="pa-1">
        <v-card color="#385F73" dark height="95">
          <v-card-title class="body-2 font-weight-bold">Validee</v-card-title>

          <v-card-subtitle class="body-2"
            >3398 livraisons validee</v-card-subtitle
          >
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 class="pa-1">
        <v-card color="#385F73" dark height="95">
          <v-card-title class="body-2 font-weight-bold"
            >En attente de realisation</v-card-title
          >
          <v-card-subtitle class="body-2"
            >3238 demandes en attente de validation</v-card-subtitle
          >
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 class="pa-1">
        <v-card color="#385F73" dark height="95">
          <v-card-title class="body-2 font-weight-bold">Effectuer</v-card-title>

          <v-card-subtitle class="body-2"
            >160 livraisons effecuees</v-card-subtitle
          >
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-container class="display: flex mt-3" fluid>
        <v-flex xs12 sm6 md3 class="pa-1">
          <v-card flat>
            <v-text-field
              v-model="searchByCompagny"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="search"
              label="Rechercher par Societe"
            ></v-text-field>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md3 class="pa-1">
          <v-card flat>
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              :return-value.sync="startDate"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="startDate"
                  label="Date de Debut"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="startDate"
                no-title
                scrollable
                locale="fr-fr"
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu1 = false"
                  >Fermer</v-btn
                >
                <v-btn text color="primary" @click="$refs.menu1.save(startDate)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md3 class="pa-1">
          <v-card flat>
            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              :return-value.sync="endDate"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="endDate"
                  label="Date de fin"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="endDate"
                no-title
                scrollable
                locale="fr-fr"
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu2 = false"
                  >Fermer</v-btn
                >
                <v-btn text color="primary" @click="$refs.menu2.save(endDate)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-card>
        </v-flex>
        <v-btn small color="#022d30" dark outlined class="ml-3"
          >Rechercher</v-btn
        >
      </v-container>
    </v-layout>

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
  align-items: center;
  align-content: center;
  justify-content: center;
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
      searchByCompagny: '',
      startDate: '',
      endDate: '',
      menu1: '',
      menu2: '',
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
