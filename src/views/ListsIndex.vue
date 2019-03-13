<template>
  <div class="list-index">
    <h1>My Lists</h1>
    <div v-for="list in lists">
      <h2>{{ list.name }}</h2>

     <!--  <router-link class="btn btn-success" to="/list/new"> Make a New List </router-link>
      <p></p>
        <div class="row">
            <router-link v-bind:to="'/lists/' + list.id">
              <div class="card">
                <h2 class="card-title"> {{ restroom.location }}</h2>
              </div>
            </router-link> -->
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
      currentList: {},
      tasks: [{
          overall_rating: 5
                }],
            locationFilter: ''
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