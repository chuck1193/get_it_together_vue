 <template>
  <div class="invitations-new">
    <h1>Adding a user to the list</h1>
    
    <div>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>

      <form v-on:submit.prevent="submit()">


      Find User to Add: 
    <select v-model="selectedUser">
      <option v-for="user in users" v-bind:value="user.id">{{ user.first_name }}</option>
    </select>

    <input type="submit" value="Submit" name="btn btn-success">
  </form>
    </div> 
    <div>
   
    </div>

  </div>
</template>

<script>
var axios = require('axios'); 
import Vue2Filters from "vue2-filters";

export default {
  data: function() {
    return {
      users: [],
      selectedUser: "",
      errors: []
    };
  },

  created: function() {
    axios.get("/api/users").then(response => {
      this.users = response.data;
    });
  },
    methods: {
        submit: function() {
            var params = {
                            user_id: this.selectedUser,
                            list_id: this.$route.params.id
                            };

          axios.post("/api/invitations", params)
            .then(response => {
              console.log( response.data);
              this.$router.push("/lists/" + this.$route.params.id);
            }).catch(error => {
              this.errors = error.response.data.errors;
            });

        }
  },
  mixins: [Vue2Filters.mixin]
}
</script>