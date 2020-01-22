<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{on}">
      <v-btn flat class="success ma-4" v-on="on">Send Message</v-btn>
    </template>

    <v-card outlined class="pa-4">
      <v-form ref="form" name="form">
        <v-form-title>
          <h1 align="center" justify="center" class="display-2 font-weight-light">Send Message</h1>
        </v-form-title>

        <v-text-field
          label="Name"
          v-model="name"
          required
          prepend-icon="mdi-account-circle"
          :rules="inputRules"
        />
        <v-textarea
          label="Write your message here"
          v-model="message"
          required
          prepend-icon="mdi-email"
          :rules="MessageRules"
        ></v-textarea>
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
    name: "",
    message: "",
    inputRules: [
      v => (v.length >= 3 && v.length <= 15) || "Minimum Length is 3 characters"
    ],
    MessageRules: [
      v =>
        (v.length >= 10 && v.length <= 110) ||
        "Length is between 10 and 110 characters"
    ],
    loading: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const UserMessageTable = {
          name: this.name,
          message: this.message
        };
        db.collection("UserMessageTable")
          .add(UserMessageTable)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("messageSent");
          });
      }
    }
  }
};
</script>