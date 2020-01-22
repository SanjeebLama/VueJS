<template>
  <v-contianer>
    <nav>
      <v-toolbar flat app class="transparent">
        <v-app-bar-nav-icon class="black--text" @click.stop="drawer =! drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class>
          <router-link to="/" style="text-decoration:none">
            <span
              class="pt-4 white--text font-weight-light teal lighten-1 white--text"
            >YouStayStrong</span>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="hidden-md-and-down ma-2" outlined color="success">
          <v-icon left>mdi-emoticon-excited-outline</v-icon>Be Kind
        </v-btn>
      </v-toolbar>

      <v-navigation-drawer class="hidden-xs-only pa-10" v-model="drawer" absolute temporary>
        <v-container class>
          <span
            align="center"
            justify="center"
            class="my-5 mx-8 font-weight-light teal lighten-1 white--text"
          >YouStayStrong</span>

          <v-list
            class="my-5 mx-5"
            v-for="list in lists"
            :key="list.title"
            align="center"
            justify="center"
          >
            <v-list-tile>
              <v-list-tile-action>
                <router-link :to="list.route" style="text-decoration:none">
                  <v-btn class="mx-2" fab dark x-large color="teal lighten-1">
                    <v-icon dark>mdi-{{list.icon}}</v-icon>
                  </v-btn>
                </router-link>
                <v-list-tile-content>
                  <v-list-tile-title class="overline" align="center" justify="center">{{list.title}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-container>
      </v-navigation-drawer>
      <!-- hidden-sm-and-up -->
      <v-navigation-drawer
        class="hidden-sm-and-up pa-10"
        v-model="drawer"
        height="25%"
        absolute
        temporary
      >
        <v-container class>
          <span
            align="center"
            justify="center"
            class="my-5 mx-8 font-weight-light teal lighten-1 white--text"
          >YouStayStrong</span>

          <v-list
            class="my-5 mx-5"
            v-for="list in lists"
            :key="list.title"
            align="center"
            justify="center"
          >
            <v-list-tile>
              <v-list-tile-action>
                <router-link :to="list.route" style="text-decoration:none">
                  <v-btn class="mx-2" fab dark x-large color="teal lighten-1">
                    <v-icon dark>mdi-{{list.icon}}</v-icon>
                  </v-btn>
                </router-link>
                <v-list-tile-content>
                  <v-list-tile-title class="overline" align="center" justify="center">{{list.title}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-container>
      </v-navigation-drawer>
    </nav>
  </v-contianer>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        {
          title: "Home",
          icon: "home",
          route: "/"
        },
        {
          title: "About",
          icon: "account-card-details",
          route: "/about"
        },
        { title: "Resources", icon: "charity", route: "/resources" },
        { title: "Music", icon: "music", route: "/music" },
        { title: "Message", icon: "email", route: "/message" }
      ],
      drawer: null
    };
  }
};
</script>