<template>
  <v-app id="goToTop">
    <!-- <v-img src="1111.svg" class md12> -->
    <Navbar />

    <v-content>
      <router-view></router-view>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="success "
        @click="toTop"
      >
        <v-icon>mdi-apple-keyboard-shift</v-icon>
      </v-btn>
    </v-content>
    <!-- </v-img> -->
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { Navbar, Footer },
  data: () => ({
    //
    publicPath: process.env.BASE_URL,
    fab: false
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
