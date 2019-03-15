<template>
  <div class="lists-edit">
          <div>
            <router-link to="/">Home</router-link>
          </div>
          <router-link to="/logout">Log Out</router-link>
        </div>
      </div>
      </nav>
    </div>
    <h1>Edit Lists</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li> 
    </ul>
    <div class="container">
      
    <form v-on:submit.prevent="submit()">
        <div>
          Name: <input v-model="restroom.name">
        </div>

        <div>
          Location: <input v-model="restroom.location">
        </div>
        <input type="submit" value="Update" class="btn btn-primary">
     </form>
    </div>
  </div>
</template>

<style>
  
</style>

<script>
var axios = require('axios');

  export default {
    data: function() {
      return {
        restroom: {
                  location: "",
                  name: ""
                },
        errors: []
      };
    },
    created: function() {
      axios.get("/api/lists/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.restroom = response.data;
      });
    },
    methods: {
      submit: function() {
        var params = {
                      name: this.list.name,
                      name: this.list.task.name,
                      content: this.list.task.content,
                      priority: this.list.task.priority,
                      status: this.list.task.status,
                      deadline: this.list.task.deadline
                      };


        axios.patch("/api/tasks/" + this.list.id, params)
          .then(response => {
           this.$router.push("/restrooms/" + this.list.id);
          }).catch(error => {
          this.errors = error.response.data.errors;
          });
      }
    }
  }
</script>