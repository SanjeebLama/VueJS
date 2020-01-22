<template>
  <v-container>
    <!-- Resources Introduction -->
    <v-container>
      <h1 class="display-1 font-weight-light pl-4">Resources</h1>
      <p class="overline pl-3">
        When asked, Following list of resources are people's favourite
        lifestyle coaches,
        story tellers, and motivational speakers.
      </p>
    </v-container>
    <v-container class="hidden-xs-only">
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in resources"
          :key="i"
          :color="colors[i]"
          :icon="item.icon"
          fill-dot
        >
          <v-card :color="colors[i]" dark data-aos="zoom-in-left" data-aos-duration="2000">
            <v-card-title class="title">{{item.Name}}</v-card-title>
            <v-card-text class="white text--primary pa-4">
              <p>{{item.Detail}}</p>
              <v-btn :color="colors[i]" class="mx-0" :href="item.link" target="_blank" outlined>Link</v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <v-container class="hidden-sm-and-up">
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in resources"
          :key="i"
          :color="colors[i]"
          :icon="item.icon"
          fill-dot
        >
          <v-card :color="colors[i]" dark>
            <v-card-title class="subtitle-1 font-weight-regular">{{item.Name}}</v-card-title>
            <v-card-text class="body-2 white text--primary pa-3">
              <p>{{item.Detail}}</p>
              <v-btn :color="colors[i]" class="mx-0" :href="item.link" target="_blank" outlined>Link</v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-container>
</template>
<script>
import db from "../fb";
export default {
  data() {
    return {
      colors: [
        "red lighten-2",
        "purple darken-1",
        "green lighten-1",
        "blue lighten-1",
        "pink lighten-2",
        "light-green darken-1",
        "teal darken-3",
        "cyan lighten-1",
        "amber darken-1",

        "purple light-1",
        "green lighten-2",
        "indigo",

        "warning",
        "pink darken-2",
        "deep-orange lighten-1",
        "deep-purple lighten-2",
        "light-blue darken-1",
        "red lighten-1",
        "lime darken-1",
        "deep-purple accent-4",
        "teal lighten-2",
        "green lighten-1",
        "light-green darken-1"
      ],
      resources: []
    };
  },
  created() {
    db.collection("resourceTable").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.resources.push({
            ...change.doc.data(), //all fields for this it's name and message from messageTable
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>