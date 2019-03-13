<template>
  <div class="lists-new">
  <router-link to="/">Home</router-link>
  <router-link to="/logout">Log Out</router-link>
    <h1>Creating a New List</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <div>
        Name: <input v-model="newListName">
        </div>
        <div>Tasks</div>
        <div>
        Task Name: <input v-model="newTaskName">
        </div>

        <div>
        Description: <input v-model="newTaskContent">
        </div>

        <div>
        Priority: <input v-model="newTaskPriority">
        </div>

        <div>
        Deadline: <input v-model="newTaskDeadline">
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
      newListName: "",
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
      console.log("Rating flushed");
      var params = {
                    name: this.newListName,
                    task_name: this.newTaskName,
                    task_description: this.newTaskContent,
                    task_priority: this.newTaskPriority,
                    task_deadline: this.newTaskDeadline
                    };
      axios.post("/api/lists", params)
        .then(response => {
          console.log("List Created", response.data);
          this.$router.push("/lists");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>