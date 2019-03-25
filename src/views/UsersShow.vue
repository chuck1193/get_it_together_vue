<template>
  <div class="users-show">
    <div>
      <h1>{{ user.first_name}} {{ user.last_name }}</h1>
    </div>

    <div id="container"></div>

    <h1>My lists</h1>
    <div v-for="list in user.lists">
      <router-link to="/lists">
        <h1>{{ list.name }}</h1>
      </router-link>
    </div>

    <!-- div>
      <ul>
        <li v-for="list in user.lists.inivted_guests">{{ lists.name }}</li>
      </ul> 
    </div> -->

    <router-link class="btn btn-success" to="/lists/new"> Make a New List </router-link>
  </div>
</template>

<style>
  #container {
    min-width: 100px;
    height: 400px;
    margin: 0 autho;
  }
</style>

<script>
import axios from "axios";
import Highcharts from "highcharts"

export default {
  data: function() {
    return {
      user: {
              id: "",
              first_name: "", 
              last_name: "",
              email: "",
              lists: {
                    id: "",
                    name: "",
                    tasks: [{
                            list_id: "",
                            name: "",
                            content: "",
                            priority: "",
                            status: "",
                            deadline: "",
                            category: ""
                          }],
                    invited_guests: [
                                    {
                                      id: "",
                                      list_id: "",
                                      list_name: "",
                                      user_id: ""
                                    }
                                    ]
                    },
              errors: [],
              }
            };
        },
        mounted: function() {
          this.addChart();
        },
  created: function() {
        var user_id = localStorage.getItem("user_id");
        axios.get("/api/users/" + user_id )
          .then(response => {
            this.user = response.data;
          }).catch(error => {
            this.errors = error.response.data.errors;
            console.log(TypeError);
            this.$router.push("/login");
          });
      }, 
  methods: {
    addChart() {
      Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Weekly Completed Tasks'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    legend: {
      enabled: false
    },
    series: [{
    
        pointStart: Date.now() - 7,
        pointInterval: 24 * 3600 * 1000,
        name: 'Completed Tasks',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }]
});
      }
    } 
}   

</script>