<template>
  <div class="users-show">
    <div v-for="user in users">
      <h1>{{ user.first_name}} {{ user.last_name }}</h1>
    </div>
    <h1>My lists</h1>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      users: {
              id: "",
              first_name: "",
              last_name: "",
              email: "",
              lists: {
                    name: "",
                    task: {
                            name: "",
                            content: "",
                            priority: "",
                            status: "",
                            deadline: ""
                          }
                    },
              errors: []
              }
            };
        },
  created: function() {
        axios.get("/api/users")
          .then(response => {
            console.log(response.data);
            this.users = response.data;
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