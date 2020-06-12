<template>
  <div>
    <v-navigation-drawer
      v-model="sideNav"
      absolute
      temporary
      color="#2F495E"
      dark
    >
      <v-system-bar></v-system-bar>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Welcome Mr John</v-list-item-title>
            <v-list-item-subtitle>john@compagny.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mb-2"></v-divider>

        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#022d30" dark dense>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click="sideNav = !sideNav"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="toolbar-title">
        <nuxt-link to="/" tag="span" style="cursor: pointer" class="orga"
          >ORGAPLAN</nuxt-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items
        v-for="item in menuItems"
        :key="item.title"
        class="hidden-xs-only"
      >
        <v-btn text class="nav-links">
          <v-icon left>{{ item.icon }}</v-icon>
          <nuxt-link class="nav-link toolbar-items-a" :to="item.link">{{
            item.title
          }}</nuxt-link>
        </v-btn>
      </v-toolbar-items>

      <v-menu v-if="AdminUser" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark text class="toolbar-title" v-on="on">
            <v-icon left>arrow_drop_down</v-icon>Admin
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="admmenu in adminMenuItems" :key="admmenu.name">
            <v-list-item-title class="nav-links">
              <nuxt-link class="nav-link" :to="admmenu.link">{{
                admmenu.name
              }}</nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<style scoped>
.orga {
  color: rgb(255, 255, 255);
  font-size: 1.2rem;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.nav-link {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
}
.nav-link.nuxt-link-exact-active {
  border-bottom: 2px solid #06c4d1;
  padding: 2;
  margin: 2;
}

.nav-link a {
  display: block;
  text-decoration: none;
  color: white;
}
.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color: #06c4d1;
}

a.nav-link.toolbar-items-a {
  color: white;
  text-decoration: none;
}
</style>

<script>
export default {
  data() {
    return {
      sideNav: false,
      AdminUser: true,
      menuItems: [
        { icon: 'event_note', title: 'Planning', link: '/Schedules' },
        { icon: 'mdi-history', title: 'Historique', link: '/History' },
        { icon: 'show_chart', title: 'Statistiques', link: '/stats' },
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
          link: '/deliveryareas'
        },
        { id: 'klhgdc', name: 'Gerer le materiel', link: '/materials' },
        { id: 'klhgdsdef', name: 'Gerer les fournisseurs', link: '/providers' },
        { id: 'sdsdwq', name: 'Gerer les entreprises', link: '/compagny' }
      ]
    }
  },
  head: {
    title: 'Orgaplan'
  }
}
</script>
