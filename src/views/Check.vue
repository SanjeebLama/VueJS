<template>
  <v-app>
    <v-card>
      <v-card-title>
        <h1>Login Form</h1>
      </v-card-title>
      <v-card-text>
        <p class="subheading">Only For Admin</p>
        <v-form>
          <v-text-field v-model="email" label="Email" prepend-icon="mdi-email" />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' :'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye':'mdi-eye-off'"
            label="Password"
            @click:append="showPassword =! showPassword"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>
<script>
import firebase from "firebase";

export default {
  name: "login",
  data: function() {
    return {
      showPassword: false,
      email: "",
      password: ""
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Logged in");
          this.$router.push("/auth");
        });
      e.preventDefault();
    }
  }
};
</script>