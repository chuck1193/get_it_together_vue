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
        <div class="form-group">
          <label>Name:</label>
         <input class="form-control" type="text" v-model="newListName">
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
      errors: []
    };
  },
created: function() {},
  methods: {
    submit: function() {
      console.log("Created");
      var user_id = localStorage.getItem("user_id");
      var params = {
                    name: this.newListName,
                    user_id: user_id
                    };
      axios.post("/api/lists", params)
        .then(response => {
          console.log("List Created", response.data);
          this.$router.push("/tasks/new");
        }).catch(error => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    }
  }
};
</script>