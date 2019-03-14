<template> 
  <div class="tasks-new">
  <router-link to="/">Home</router-link>
  <router-link to="/logout"> Log Out</router-link>
    <h1>Creating a New Task</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>Name:</label>
         <input class="form-control" type="text" v-model="newTaskName">
        </div>

        <div class="form-group">
          <label>Description:</label>
         
        <input class="form-control" type="text" v-model="newTaskContent">
        </div>

        <div class="form-group">
          <label>Priority:</label>
         <input class="form-control" type="text" v-model="newTaskPriority">
        </div>

        <div class="form-group">
          <label>Deadline:</label>
         <input class="form-control" type="date" v-model="newTaskDeadline">
        </div>

        <input type="submit" value="Submit" name="btn btn-success">
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
      newTaskName: "",
      newTaskContent: "",
      newTaskPriority: "",
      newTaskDeadline: "",
      errors: []
    };
  },
created: function() {},
  methods: {
    submit: function() {
      console.log("Created");
      var user_id = localStorage.getItem("user_id")
      var params = {
                    task_name: this.newTaskName,
                    task_description: this.newTaskContent,
                    task_priority: this.newTaskPriority,
                    task_deadline: this.newTaskDeadline,
                    user_id: user_id
                    };
      axios.post("/api/tasks", params)
        .then(response => {
          console.log("Task Created", response.data);
          this.$router.push("/tasks");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>