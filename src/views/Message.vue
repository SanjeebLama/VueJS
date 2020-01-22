<template>
  <v-container>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Your Request is Sent</span>
      <v-btn dark outline color="success" @click="snackbar=false">Close</v-btn>
    </v-snackbar>
    <!-- Introduction -->
    <v-container class="hidden-xs-only">
      <h1
        class="display-1 font-weight-light pt-3 mt-2"
        align="left"
        justify="center"
        data-aos="zoom-in-down"
        data-aos-duration="3000"
      >Your Messages</h1>
      <p class="caption">All of these messages are from your well wishers</p>
    </v-container>
    <v-container class="hidden-sm-and-up">
      <h1 class="headline font-weight-regular" align="left" justify="center">Your Messages</h1>
      <p class="overline">All of these messages are from your well wishers</p>
    </v-container>
    <!-- <v-carousel cycle height="600" hide-delimiters show-arrows-on-hover> -->

    <v-carousel class="hidden-xs-only" height="500px" hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="(single, i) in messages.slice(0,20)" :key="single">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div
              class="display-2 font-weight-medium pa-4 ma-4"
              align="center"
              justify="center"
              xs8
              md4
              max-width="10px"
            >
              {{ single.message }}
              <br />
              <p class="subtitle-1">
                {{single.name}}
                {{ i}}
              </p>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-carousel class="hidden-sm-and-up" height="450px" hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="(single, i) in messages.slice(0,20)" :key="single">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="title pa-2 ma-2" align="center" justify="center" xs8 md4 max-width="10px">
              {{ single.message }}
              <p class="overline pt-2 mt-2">{{single.name}}</p>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- About Message -->
    <v-container class="hidden-xs-only ma-4" name="How This Works">
      <v-layout dark>
        <v-flex>
          <h1 align="center" justify="center" class="ma-4 pa- 4 display-3">How this works ?</h1>
          <h2 align="center" justify="center" class="font-weight-light">
            -
            <b>By the</b> People
            <b>For the</b> People -
          </h2>
        </v-flex>
      </v-layout>
      <v-layout class="ma-4 pa-4" dark>
        <v-flex>
          <h2 class="font-weight-light" align="center" justify="center">
            You can send message and your favourite quotes to People
            who might be having hard time.
            Your messages will only be posted after passing through the CensorBoard.
            All of the message are for you to let you know that you are not alone,
            you're loved and you'll always be.
            <br />You can also send your wishes.
            <MessageForm @messageSent="snackbar= true" />
          </h2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="hidden-sm-and-up" name="How This Works">
      <v-layout dark>
        <v-flex>
          <h1 align="center" justify="center" class="headline font-weight-medium">How this works ?</h1>
          <h2 align="center" justify="center" class="caption font-weight-light">
            -
            <b>By the</b> People -
            <b>For the</b> People -
          </h2>
        </v-flex>
      </v-layout>
      <v-layout dark>
        <v-flex>
          <h2 class="subtitle-1 font-weight-light pa-2 ma-2" align="center" justify="center">
            You can send message and your favourite quotes to People
            who might be having hard time.
            Your messages will only be posted after passing through the CensorBoard.
            All of the message are for you to let you know that you are not alone,
            you're loved and you'll always be.
            You can also send your wishes.
            <br />
            <MessageForm @messageSent="snackbar= true" />
          </h2>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import db from "../fb";
import MessageForm from "../components/MessageForm.vue";
export default {
  components: { MessageForm },
  data() {
    return {
      index: 0,
      colors: [
        "light-green darken-1",
        "blue lighten-1",
        "pink lighten-2",

        "teal accent-3",
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

      messages: []
    };
  },

  created() {
    db.collection("filteredTable").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.messages.push({
            ...change.doc.data(), //all fields for this it's name and message from messageTable
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>
