<template>
  <div class="signup">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div>
          <label>First Name:</label> 
          <input type="text" v-model="first_name">
        </div>
        <div>
          <label>Last Name:</label> 
          <input type="text" v-model="last_name">
        </div>
        <div>
          <label>Email:</label>
          <input type="email" v-model="email">
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password">
        </div>
        <div>
          <label>Password confirmation:</label>
          <input type="password" v-model="passwordConfirmation">
        </div>
        <input type="submit"  value="Submit">
      </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      first_name:"",
      last_name:"",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>