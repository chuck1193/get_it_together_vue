<template>
  <div class="users-show">
    <div>
      <h1>{{ user.first_name}} {{ user.last_name }}</h1>
    </div>
    <h1>My lists</h1>
    <div v-for="list in user.lists">
      <router-link to="/lists">
        <h1>{{ list.name }}</h1>
      </router-link>
    </div>
<!--     <div v-for="task in user.tasks">
      <h2>Name: {{ task.name }}</h2>
      <h2>Description: {{ task.content }}</h2>
      <h2>Priority: {{ task.priority }}</h2>
      <h2>Status: {{ task.status }}</h2>
      <h2>Deadline: {{ task.deadline }}</h2>
      <h2>Category: {{ task.category }}</h2>

    </div> -->
    <router-link class="btn btn-success" to="/lists/new"> Make a New List </router-link>
  </div>
</template>

<script>
import axios from "axios";
var Highcharts = require('highcharts');

export default {
  data: function() {
    return {
      user: {
              id: "",
              first_name: "",
              last_name: "",
              email: "",
              lists: {
                    name: "",
                    tasks: [{
                            list_id: "",
                            name: "",
                            content: "",
                            priority: "",
                            status: "",
                            deadline: "",
                            category: ""
                          }]
                    },
              errors: []
              }
            };
        },
  created: function() {
        var user_id = localStorage.getItem("user_id");
        axios.get("/api/users/" + user_id)
          .then(response => {
            console.log(response.data);
            this.user = response.data;
          }).catch(error => {
            this.errors = error.response.data.errors;
            console.log(response.data.errors);
            this.$router.push("/login");
          });
      }, 
  methods: {
  
  }
};
</script>