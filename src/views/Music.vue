<template>
  <v-container>
    <!-- Introduction -->
    <v-container class="hidden-xs-only">
      <v-layout class="ma-4 pa-4" row wrap justify-space-between>
        <v-flex xs12 md6>
          <h1
            class="display-2 pa-4 ma-2"
            align="center"
            justify="center"
            data-aos="zoom-in-down"
            data-aos-duration="3000"
          >Music</h1>
          <br />
          <p
            class="body-2 font-weight-regular pa-2"
            align="center"
            justify="center"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            When asked, my friend
            <b>Ameena</b>-she likes to listen to
            <b>soothing</b> songs
            of artists like Sajjan Raj Vaidya, Ed Sheeran
            when she feels low while my another friend
            <b>Nobel</b>, he likes to listen to
            <b>rap</b>
            songs of artist like Eminem when he's sad and my school friend
            <b>Siddant</b>
            feels better when he
            listens to
            <b>rock</b> band Scorpion.
            <br />
            <u>
              Even though our taste in music is different but we all can agree that
              music make us feel refreshed and relaxed.
            </u>
            <br />
            <br />
          </p>
        </v-flex>
        <v-flex xs12 md6>
          <v-row align="center" justify="center">
            <v-img
              src="ForMusic.svg"
              max-width="400px"
              data-aos="zoom-in-down"
              data-aos-duration="3000"
              data-aos-once="true"
            ></v-img>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="hidden-sm-and-up">
      <v-layout row wrap justify-space-between>
        <v-flex xs12 md6>
          <h1 class="display-1 font-weight-medium" align="center" justify="center">Music</h1>
          <br />
          <p class="subtitle-1 font-weight-light" align="center" justify="center">
            When asked, my friend
            <b>Ameena</b>,she likes to listen to
            <b>soothing</b> songs
            of artists like Sajjan Raj Vaidya, Ed Sheeran
            while my another friend
            <b>Nobel</b>, he likes to listen to
            <b>rap</b>
            of Eminem when he's sad and my school friend
            <b>Siddant</b>
            feels better when he
            listens to
            <b>rock</b> band Scorpion.
            <br />
            <u>
              Even though our taste in music is different but we all can agree that
              music make us feel refreshed and relaxed.
            </u>
          </p>
        </v-flex>
        <v-flex xs12 md6>
          <v-row align="center" class="pa-2 ma-2" justify="center">
            <v-img src="ForMusic.svg" max-width="290px"></v-img>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="hidden-xs-only">
      <v-layout row wrap justify-space-around>
        <v-hover v-slot:default="{ hover }" v-for="(music,i) in musicList" :key="music">
          <v-card :color="colors[i]" dark :elevation="hover ? 12 : 2" class="ma-4" max-width="400">
            <v-card-title>
              <h2 class data-aos="slide-down" data-aos-delay="4000">{{music.ArtistName}}</h2>
            </v-card-title>
            <v-card-text>Following is the list of song which is linked to the youtube.</v-card-text>
            <v-divider class="mx-4"></v-divider>

            <v-card-text class="white text--primary">
              <span class="subheading">Select a song to play</span>

              <v-chip-group column active-class="deep-purple--text text--accent-4">
                <v-chip :href="music.link1" target="_blank">{{music.song1}}</v-chip>

                <v-chip :href="music.link2" target="_blank">{{music.song2}}</v-chip>
                <v-chip :href="music.link3" target="_blank">{{music.song3}}</v-chip>
                <v-chip :href="music.link4" target="_blank">{{music.song4}}</v-chip>
              </v-chip-group>
            </v-card-text>

            <!-- <v-card-actions>
      <v-btn block class="white--text" color="deep-purple accent-4" @click="link">Listen</v-btn>
            </v-card-actions>-->
          </v-card>
        </v-hover>
      </v-layout>
    </v-container>
    <v-container class="hidden-sm-and-up">
      <v-layout row wrap justify-space-around>
        <v-hover v-slot:default="{ hover }" v-for="(music,i) in musicList" :key="music">
          <v-card
            :color="colors[i]"
            dark
            :elevation="hover ? 12 : 2"
            class="ma-3"
            max-width="295
          "
          >
            <v-card-title>
              <h3 class="font-weight-regular">{{music.ArtistName}}</h3>
            </v-card-title>
            <v-card-text
              class="overline"
            >Following is the list of song which is linked to the youtube.</v-card-text>
            <v-divider class="mx-4"></v-divider>

            <v-card-text class="white text--primary">
              <span class="caption">Select a song to play</span>

              <v-chip-group column active-class="deep-purple--text text--accent-4">
                <v-chip :href="music.link1" target="_blank">{{music.song1}}</v-chip>

                <v-chip :href="music.link2" target="_blank">{{music.song2}}</v-chip>
                <v-chip :href="music.link3" target="_blank">{{music.song3}}</v-chip>
                <v-chip :href="music.link4" target="_blank">{{music.song4}}</v-chip>
              </v-chip-group>
            </v-card-text>

            <!-- <v-card-actions>
      <v-btn block class="white--text" color="deep-purple accent-4" @click="link">Listen</v-btn>
            </v-card-actions>-->
          </v-card>
        </v-hover>
      </v-layout>
    </v-container>
  </v-container>
</template>
<script>
import db from "../fb";
export default {
  data: () => {
    return {
      colors: [
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
      musicList: []
    };
  },
  created() {
    db.collection("musicTable").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.musicList.push({
            ...change.doc.data(), //all fields for this it's name and message from messageTable
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>