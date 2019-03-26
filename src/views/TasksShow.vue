<template>
  <div class="tasks-show">
    <div v:for="task in tasks">
      <h1 :v-model="task.name">{{ task.name}}</h1>
    </div>

  <table class="table table-hover">
    <thead class="thead-dark">
    </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Description:</td>
      <td v-model="task.content">{{ task.content }}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Priority:</td>
      <td v-model="task.priority">{{ task.priority }}</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Status:</td>
      <td >{{ task.status }}</td>

      <td><label class="checkbox-inline"><input type="radio" v-on:change="completeTask()" value="complete" v-model="task.status">Complete</label></td>

      <td><label class="checkbox-inline"><input type="radio" v-on:change="completeTask()" value="pending" v-model="task.status">Pending</label></td>
  
    </tr>

    <tr>
      <th scope="row"></th>
      <td>Deadline:</td>
      <td v-model="task.deadline"><span>{{ task.deadline }}</span></td>

      <td></td>
    </tr>

    <tr>
      <th scope="row"></th>
      <td>Category:</td>
      <td v-model="task.category">{{ task.category }}</td>
      <td></td>
    </tr>
  </tbody>
</table>

    <div>
      <router-link :to="'/lists/' + task.list_id">Back To List</router-link>
    </div>
    <router-link :to="'/tasks/' + task.id + '/edit' ">Edit</router-link>
    <button v-on:click="destroyTask()">Delete</button>
  </div>
</template>

<style>
  
</style>

<script>
  var axios = require('axios')

  export default {
    data: function() {
      return {
              task: {
                    id: "",
                    name: "",
                    content: "",
                    priority: "",
                    status: "",
                    deadline: "",
                    category: "",
                    list_id: ""
                    },
              errors: []
          }
        },
    created: function() {
      axios.get("/api/tasks/" + this.$route.params.id)
        .then(response => {
          this.task = response.data;
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }, 
    methods: {
    
  
      completeTask: function() {
       var completed = 0;
       var params = {
                      status: this.task.status
                     }

       axios.patch("/api/tasks/" + this.task.id, params)
        .then(response => {
          this.task = response.data;
        })
        var completed = [];
         if (status === "complete") { 
          completed ++;
        console.log(completed);
         };
      },




      destroyTask: function() {
        axios.delete("/api/tasks/" + this.task.id)
          .then(response => {
            console.log("Successly Deleted", response.data);
            this.$router.push("/list/" + this.task.list_id );
          }).catch(error => {
            this.errors = error.response.data.errors;
            console.log(this.errors);
          });
        }
      }
    }
</script>
