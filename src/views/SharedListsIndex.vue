<template>
  <div class="shared-lists-index">
    <h1>Users on this list</h1>
    
    <div v-for="invitation in invitations">   
      <h2>{{ user.list.invitation }}</h2>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  data: function() {
    return {
      users: [],
      list: [],
      invitations: []
    };
  },

  created: function() {
    var user_id = localStorage.getItem("user_id");
    axios.get("/api/invitations").then(response => {
      this.users = response.data
      console.log(this.users)
    });
  },
  methods: {
    
  },
  mixins: [Vue2Filters.mixin]
}
</script>