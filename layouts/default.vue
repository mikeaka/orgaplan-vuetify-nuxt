<template>
  <v-app class="main-content">
    <TheHeader />
    <v-content>
      <Nuxt />
    </v-content>
  </v-app>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: 'Lato', sans-serif;
}
</style>

<script>
import TheHeader from '~/components/TheHeader/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      drawer: true,
      items: [
        { icon: 'mdi-home', text: 'Home' },
        { icon: 'mdi-fire', text: 'Trending' },
        { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
        { icon: 'mdi-folder', text: 'Library' },
        { icon: 'mdi-history', text: 'History' },
        { icon: 'mdi-clock', text: 'Watch Later' },
        { icon: 'mdi-thumb-up', text: 'Liked videos' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ],
      sideNav: false,
      AdminUser: true,
      menuItems: [
        { icon: 'event_note', title: 'Planning', link: '/Schedules' },
        { icon: 'mdi-history', title: 'Historique', link: '/History' },
        { icon: 'show_chart', title: 'Statistiques', link: '/stats' },
        { icon: 'local_shipping', title: 'Fournisseurs', link: '/Providers' },
        { icon: 'lock_open', title: 'Login', link: '/Login' },
        { icon: 'exit_to_app', title: 'Logout', link: '/Logout' }
      ],
      adminMenuItems: [
        {
          id: 'hjtfdd',
          name: 'Gerer les chantiers',
          link: '/constructionsites'
        },
        {
          id: 'sddfvx',
          name: 'Gerer les zones de livraison',
          link: '/deliveryAreas'
        },
        { id: 'klhgdc', name: 'Gerer le materiel', link: '/materials' }
      ]
    }
  },
  head: {
    title: 'Nuxt Vuetify Starter'
  }
}
</script>
