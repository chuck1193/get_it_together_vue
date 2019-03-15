<template>
  <div class="lists-index">
    <router-link to="/">Home</router-link>
    <router-link to="/logout">Log Out</router-link>
    <h1>My Lists</h1>
    <div v-for="list in lists">
        <router-link :to="'/lists/' + list.id">{{ list.name }}</router-link>
    </div>

      <router-link class="btn btn-success" to="/list/new"> Make a New List </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      lists: [],
    };
  },
  created: function() {
    axios.get("/api/lists").then(response => {
      this.lists = response.data;
    });
  },
  methods: {}
};
</script>