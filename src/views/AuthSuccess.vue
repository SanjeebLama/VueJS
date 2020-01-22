<template>
  <v-container>
    <h1>Welcome To Admin Panel,</h1>
    <br />
    <br />
    <v-layout row wrap justify-space-between>
      <v-flex xs12 md6>
        <v-card class="ma-auto pa-4">
          <p class="heading" align="center" justify="center">
            I do this because this just seems right.
            <br />I might not change the world,
            <br />the laws or
            <br />spark a civil right movement
            <br />but I can gurante
            that I will change something
            <br />
            <b>equally as important</b>
            <br />
            <b>I will change myself.</b>
          </p>
        </v-card>
      </v-flex>
      <v-flex class="pa-4" xs12 md6>
        <v-row align="center" justify="center">
          <v-img src="admin.svg" max-width="300px"></v-img>
        </v-row>
      </v-flex>
      <br />
      <br />
    </v-layout>

    <br />
    <br />
    <v-card class="ma-auto" max-width="400">
      <v-list>
        <v-list-item-group v-model="model" mandatory color="indigo">
          <v-list-item v-for="item in filterItems" :key="item">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <router-link :to="item.route">
              <v-list-tile-content>
                <h1 class="display2 blue--text">
                  <v-list-tile-title v-text="item.text"></v-list-tile-title>
                </h1>
              </v-list-tile-content>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <br />
    <br />
    <v-btn @click="logout" class="warning">Sign out</v-btn>
  </v-container>
</template>


<script>
import firebase from "firebase";
export default {
  data() {
    return {
      //For routing Purpose
      filterItems: [
        {
          icon: "mdi-email",
          text: "Message",
          route: "/filter-message"
        },
        {
          icon: "mdi-account-card-details",
          text: "quotes",
          route: "/filter-quote"
        },
        {
          icon: "mdi-music",
          text: "Music",
          route: "/filter-music"
        },
        {
          icon: "mdi-charity",
          text: "Resources",
          route: "/filter-resource"
        }
      ],
      isLoggedIn: false,
      currentUser: false
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/check");
        });
    }
  }
};
</script>