<template>
  <div class="tasks-show">
    <router-link to="/">Home</router-link>
    <router-link to="/logout">Logout</router-link>
    <h1>{{ task.name }}</h1>

    <h2>content: {{ task.content }}</h2>
    <h2>priority: {{ task.priority }}</h2>
    <h2>status: {{ task.status }}</h2>
    <h2>deadline: {{ task.deadline }}</h2>

    <div>
      <router-link :to="'/lists/' + task.list_id">Back To List</router-link>
    </div>
    <router-link :to="'/tasks/' + task.id + '/edit' ">Edit</router-link>
    <button v-on:click="destroyTask()">Delete</button>
  </div>
</template>

<style>
  
</style>
<script>
  var axios = require('axios')

  export default {
    data: function() {
      return {
              task: {
                    id: "",
                    name: "",
                    content: "",
                    priority: "",
                    status: "",
                    deadline: "",
                    list_id: ""
                    },
              errors: []
          }
        },
    created: function() {
      axios.get("/api/tasks/" + this.$route.params.id)
        .then(response => {
          console.log(response.data)
          this.task = response.data;
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }, 
    methods: {
      destroyTask: function() {
        axios.delete("/api/tasks/" + this.task.id)
          .then(response => {
            console.log("Successly Deleted", response.data);
            this.$router.push("/list/" + this.task.list_id );
          }).catch(error => {
            this.errors = error.response.data.errors;
            console.log(this.errors);
          });
        }
      }
    }
</script>
