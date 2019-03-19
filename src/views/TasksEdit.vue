<template>
  <div class="tasks-edit">
    <h1>Edit Your Tasks</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li> 
    </ul>
    <div class="container">
      
    <form v-on:submit.prevent="submit()">

        <div>
          Name: <input v-model="task.name">
        </div>

        <div>
          Content: <input v-model="task.content">
        </div>
        

        <div class="form-group">
          <label>Priority:</label>
          <select class="form-control" v-model="task.priority">
            <option value="highest">Highest</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            <option value="lowest">Lowest</option>
          </select>
        </div>

        <div class="form-group">
          <label>Deadline:</label>
         <input class="form-control" type="date" v-model="task.deadline">
        </div>

        <div class="form-group">
          <label>Category:</label>
          <select class="form-control" v-model="task.category">
            <option value="school">School</option>
            <option value="grocery">Grocery</option>
            <option value="work">Work</option>
            <option value="home">Home</option>
            <option value="other">Other</option>
          </select>
        </div>

        <input type="submit" value="Update" class="btn btn-primary" >
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
        task: {   
               id: "",
               name: "",
               content: "",
               priority: "",
               deadline: "",
               category: ""
              },
        errors: []
      };
    },
    created: function() {
      axios.get("/api/tasks/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.task = response.data;
      });
    },
    methods: {
      submit: function() {
        var params = {
                      name: this.task.name,
                      content: this.task.content,
                      priority: this.task.priority,
                      status: this.task.status,
                      deadline: this.task.deadline,
                      category: this.task.category
                      };


        axios.patch("/api/tasks/" + this.task.id, params)
          .then(response => {
           this.$router.push("/tasks/" + this.task.id);
          }).catch(error => {
          this.errors = error.response.data.errors;
          });
      }
    }
  }
</script>