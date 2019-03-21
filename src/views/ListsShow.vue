<template>
  <div class="lists-show">
    <router-link to="/lists">Back to Your Lists</router-link>
    <h1>{{ list.name }}</h1>



    <!-- <router-link :to="/sharedlists/">Users sharing this list</router-link> -->
    <div>
      <router-link :to="'/lists/' + list.id + '/invitations/new'">Add a new user to the list:</router-link>
    </div>

    <div>
      <ul>
        <li v-for="user in list.invited_guests">{{ user.first_name + " " + user.last_name }}</li>
      </ul> 
    </div>

    

      <div v-for="task in list.tasks">
        <router-link :to="'/tasks/' + task.id">
          <h2>{{ task.name }}</h2>
        </router-link>
      </div>
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
          <select class="form-control" v-model="newTaskPriority">
            <option value="highest">Highest</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            <option value="lowest">Lowest</option>
          </select>
        </div>

        <div class="form-group">
          <label>Deadline:</label>
         <input class="form-control" type="date" v-model="newTaskDeadline">
        </div> 

        
        <div class="form-group">
          <label>Catergory:</label>
          <select class="form-control" v-model="newTaskCategory">
            <option value="school">School</option>
            <option value="grocery">Grocery</option>
            <option value="work">Work</option>
            <option value="home">Home</option>
            <option value="other">Other</option>
          </select>
        </div>

        

        <input type="submit" value="Submit" name="btn btn-success">
      </form>

      <button v-on:click="destroyList()">Delete</button>
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
        list: {
              id: "",
              name: "", 
              tasks: [
                        {
                          id: "",
                          name: "",
                          content: "",
                          priority: "",
                          status: "",
                          deadline: "",
                          category: ""
                        }
                      ],
              invited_guests: [
                                {
                                  id: "",
                                  first_name: "",
                                  last_name: ""
                                }
                              ]

                  },
                  newTaskName: "",
                  newTaskContent: "",
                  newTaskPriority: "",
                  newTaskDeadline: "",
                  newTaskCategory: "",
                  errors: []
          };
        },
    created: function() {
      axios.get("/api/lists/" + this.$route.params.id)
        .then(response => {
          this.list = response.data;
        }).catch(error => {
          this.errors = error.response.data.erros;
        });
    }, 


    methods: {
      destroyList: function() {
        axios.delete("/api/lists/" + this.list.id)
          .then(response => {
            console.log("Success", response.data);
            this.$router.push("/");
          }).catch(error => {
          this.errors = error.response.data.errors;
        });
      },
      submit: function() {
            console.log("Created");
            var params = {
                          list_id: this.$route.params.id,
                          name: this.newTaskName,
                          content: this.newTaskContent,
                          priority: this.newTaskPriority,
                          deadline: this.newTaskDeadline,
                          category: this.newTaskCategory,
                          };

            axios.post("/api/tasks", params)
              .then(response => {
                console.log("Task Created", response.data);
                this.list.tasks.push(response.data);
              }).catch(error => {
                this.errors = error.response.data.errors;
                console.log(this.errors);
              });
          }
        },
    }
</script>
