<template>
  <!-- Censor Board -->
  <v-data-table :headers="headers" :items="messages" sort-by="name" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My CRUD</v-toolbar-title>

        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn @click="goback" class="success">GoBack</v-btn>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-textarea v-model="editedItem.message" label="Message" height="200px"></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.action="{ item }">
      <v-btn color="blue darken-1" class="mr-2" @click="addItem(item)">Send</v-btn>
      <v-snackbar v-model="snackbar" top color="success">
        <span>Message Sent For Display</span>
      </v-snackbar>
      <v-btn color="yellow" class="mr-2" @click="editItem(item)">edit</v-btn>
      <v-btn color="red darken-1" @click="deleteItem(item)">delete</v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import db from "../fb";
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "id",
        align: "left",
        sortable: false,
        value: "id"
      },
      { text: "Name", value: "name" },
      { text: "Messages", value: "message" },

      { text: "Actions", value: "action", sortable: false }
    ],
    messages: [],
    snackbar: "",

    editedIndex: -1,
    editedItem: {
      name: "",
      message: ""
    },
    defaultItem: {
      name: "",
      message: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.fetchMessages();
    },

    //messages Fetch from database

    fetchMessages() {
      db.collection("messageTable").onSnapshot(res => {
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
    },

    //to send message for display
    addItem(item) {
      const filteredTable = {
        name: item.name,
        message: item.message
      };
      db.collection("filteredTable")
        .add(filteredTable)
        .then(() => {});

      //delete from messageTable

      db.collection("messageTable")
        .doc(item.id)
        .delete();
      this.snackbar = true;
    },

    editItem(item) {
      this.editedIndex = this.messages.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.messages.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.messages.splice(index, 1);
      //delete in database
      db.collection("messageTable")
        .doc(item.id)
        .delete();
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        //to edit in database Document
        db.collection("messageTable")
          .doc(this.editedItem.id)
          .update({
            name: this.editedItem.name,
            message: this.editedItem.message
          });
        // to show in webpage document
        Object.assign(this.messages[this.editedIndex], this.editedItem);
      } else {
        this.messages.push(this.editedItem);
      }
      this.close();
    },
    goback: function() {
      this.$router.push("/auth");
    }
  }
};
</script>