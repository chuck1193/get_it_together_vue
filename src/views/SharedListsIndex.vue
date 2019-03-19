<template>
  <div class="shared-lists-index">
    <h1>Users on this list</h1>
    


  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      invitations: [],
    };
  },
  created: function() {
    axios.post("/api/invitations").then(response => {
      this.invitations = response.data;
    });
  },
  methods: {
    
  }
};
</script>