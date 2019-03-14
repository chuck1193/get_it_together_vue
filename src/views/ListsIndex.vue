<template>
  <div class="list-index">
    <router-link to="/">Home</router-link>
    <router-link to="/logout">Log Out</router-link>
    <h1>My Lists</h1>
    <div v-for="list in lists">
      <div>
        <router-link to="/tasks">{{ list.name }}</router-link>
      </div>

      <router-link class="btn btn-success" to="/list/new"> Make a New List </router-link>
      <p></p>
        <div class="row">
            <router-link v-bind:to="'/lists/' + list.id">
            </router-link>
        </div>

    </div>
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
      console.log(this.lists)
    });
  },
  methods: {}
};
</script>