<template>
  <v-container>
    <v-container class="my-5 mx-5">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <h1 class="display-4">
            You have a message from Stranger.
            <v-btn>
              <v-icon large>mdi-email</v-icon>
            </v-btn>
          </h1>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
        <v-row align="center" justify="center">
          <h1 class="display-2 font-weight-thin mb-4">About WeAreOne</h1>
          <h4
            class="subheading"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, officia, nobis fuga fugiat quaerat, possimus consequatur enim odit quasi iure qui sapiente dicta! Ipsum animi perspiciatis porro alias illo consectetur.</h4>
        </v-row>
      </v-parallax>
    </v-container>
    <v-card-text class="grey lighten-2">
      <v-form>
        <h1 class="display-4">Send Message</h1>
        <v-text-field label="Name" required prepend-icon="mdi-account-circle" />
        <v-text-field
          type="password"
          label="Password"
          required
          prepend-icon="mdi-lock"
          append-icon="mdi-eye-off"
        />
        <v-card-action>
          <v-btn color="success">Submit</v-btn>
        </v-card-action>
      </v-form>
    </v-card-text>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "",
  components: {}
};
</script>
