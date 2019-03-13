<template>
  <div class="lists-show"><router-link
    <h1>My Lists</h1>
    <div v-for="list in lists">
      <h2>{{ list.name }}</h2>
    </div>
      <h3 v-for="task in tasks">{{ task.name }}</h3>
    <router-link to="/lists/new">Create a New List</router-link>
    <router-link to="'/lists/' + list.id + '/edit' ">Edit</router-link>
    <button v-on:click="destroyList()">Delete</button>
  </div>
</template>

<style>
  
</style>
<script>
  var axios = require('axios')

  export default {
    data: function() {
      return {
        lists: {
              name: "", 
              task: {
                    name: "",
                    content: "",
                    priority: "",
                    status: "",
                    deadline: ""
                    },
              errors: []
                }
          },
        };
      },
    created: function() {
      axios.get("/api/lists/" + this.$route.params.id)
        .then(response => {
          console.log(response.data);
          this.list = response.data;
        });

    axios.get("/api/tasks/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.task = response.data;
      });

    }, 


    methods: {
      destroyList: function() {
        axios.delete("/api/lists/" + this.review.id)
          .then(response => {
            console.log("Success", response.data);
            this.$router.push("/");
          });
      },

      submit: function() {
        
      }
    }
</script>
