<template>
  <div class="users-index">
    <h1>My lists</h1>
    <h1>{{ user.first_name}} {{ user.last_name }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      users: []
    };
  },
  created: function() {
        axios.get("/api/users/" + this.$route.params.id)
          .then(response => {
            console.log(response.data);
            this.current_user = response.data;
          });
      }, 
  methods: {

  }
};
</script>