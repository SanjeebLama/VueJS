<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{on}">
      <v-btn flat class="success ma-4" v-on="on">Send Music</v-btn>
    </template>

    <v-card outlined class="pa-4">
      <v-form ref="form" name="form">
        <v-form-title>
          <h1 align="center" justify="center" class="display-2 font-weight-light">Send Music</h1>
        </v-form-title>

        <v-text-field
          label="Artist || Band Name"
          v-model="ArtistName"
          required
          prepend-icon="mdi-account-circle"
          :rules="inputRules"
        />
        <v-text-field
          label="Song Name"
          v-model="song1"
          required
          prepend-icon="mdi-account-circle"
          :rules="inputRules"
        />

        <v-card-action>
          <v-btn color="success" @click="submit" :loading="loading">Send</v-btn>
        </v-card-action>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import db from "../fb";
export default {
  data: () => ({
    dialog: false,
    ArtistName: "",
    song1: "",
    inputRules: [
      v => (v.length >= 3 && v.length <= 15) || "Minimum Length is 3 characters"
    ],

    loading: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const UserMusicTable = {
          ArtistName: this.ArtistName,
          song1: this.song1
        };
        db.collection("UserMusicTable")
          .add(UserMusicTable)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("songSent");
          });
      }
    }
  }
};
</script>