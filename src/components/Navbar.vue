<template>
  <nav class="hidden-lg-and-up">
    <v-toolbar flat app class="grey darken-1">
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer =! drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">
        <span class="font-weight-light black--text">Solve</span>
        <span>Vue</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        Help
        <v-icon right>mdi-help</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer absolute v-model="drawer" class="white lighten-4">
      <v-list class="my-5 mx-5" v-for="list in lists" :key="list.title">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon medium class="blue--text" left>mdi-{{list.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{list.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        { title: "Message", icon: "email" },
        { title: "About", icon: "help" },
        { title: "Song of the day", icon: "music" },
        { title: "Real Story", icon: "message" }
      ],
      drawer: false
    };
  }
};
</script>