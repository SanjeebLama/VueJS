<template>
  <v-footer dark padless>
    <v-card flat tile class="teal darken-3 white--text text-center">
      <v-card-text class="white--text">
        <h1>Join Our Community</h1>
      </v-card-text>
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        This is to clarify that any creative resources, musics and illustrations used on this
        progressive web application are not mine.
        All of the resources, music and illustrations
        credits goes to their respective owner.
        This web application is built to to raise awarness about mental health and to remind people to be kind to one another.
        This web application doesn't claim to cure mental illness. If you're suffering from
        mental illness - please contact professionals.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong>© NoCopyRight</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"]
  })
};
</script>