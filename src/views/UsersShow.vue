<template>
  <div class="users-show">
    <div>
      <h1>{{ user.first_name}} {{ user.last_name }}</h1>
    </div>
    <h2>A chart</h2>
    <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>

    <h1>My lists</h1>
    <div v-for="list in user.lists">
      <router-link to="/lists">
        <h1>{{ list.name }}</h1>
      </router-link>
    </div>
<!--     <div v-for="task in user.tasks">
      <h2>Name: {{ task.name }}</h2>
      <h2>Description: {{ task.content }}</h2>
      <h2>Priority: {{ task.priority }}</h2>
      <h2>Status: {{ task.status }}</h2>
      <h2>Deadline: {{ task.deadline }}</h2>
      <h2>Category: {{ task.category }}</h2>

    </div> -->
    <router-link class="btn btn-success" to="/lists/new"> Make a New List </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {
              id: "",
              first_name: "",
              last_name: "",
              email: "",
              lists: {
                    name: "",
                    tasks: [{
                            list_id: "",
                            name: "",
                            content: "",
                            priority: "",
                            status: "",
                            deadline: "",
                            category: ""
                          }]
                    },
              errors: []
              }
            };
        },
  created: function() {
        var user_id = localStorage.getItem("user_id");
        axios.get("/api/users/" + user_id)
          .then(response => {
            console.log(response.data);
            this.user = response.data;
          }).catch(error => {
            this.errors = error.response.data.errors;
            console.log(response.data.errors);
            this.$router.push("/login");
          });
      }, 
  methods: {}
  // document.addEventListener('DOMContentLoaded', function () {
  //     var myChart = Highcharts.chart('container', {
  //   chart: {
  //       type: 'area'
  //   },
  //   title: {
  //       text: 'Weekly Completed Tasks'
  //   },
  //   subtitle: {
  //       text: ''
  //   },
  //   xAxis: {
  //       type: 'datetime',
  //       tickmarkPlacement: 'on',
  //       title: {
  //           enabled: false
  //       }
  //   },
  //   yAxis: {
  //       title: {
  //           text: ''
  //       },
  //       labels: {
  //           formatter: function () {
  //               return this.value / 1000;
  //           }
  //       }
  //   },
  //   legend: {
  //       enabled: false
  //   },
  //   plotOptions: {
  //       area: {
  //           stacking: 'normal',
  //           lineColor: '#666666',
  //           lineWidth: 1,
  //           marker: {
  //               lineWidth: 1,
  //               lineColor: '#666666'
  //           }
  //       }
  //   },
  //   series: [{
  //       name: 'School',
  //       data: [502, 635, 809, 947, 1402, 3634, 5268]
  //   }, {
  //       name: 'Home',
  //       data: [106, 107, 111, 133, 221, 767, 1766]
  //   }, {
  //       name: 'Work',
  //       data: [163, 203, 276, 408, 547, 729, 628]
  //   }, {
  //       name: 'Other',
  //       data: [18, 31, 54, 156, 339, 818, 1201]
  //   }, {
  //       name: 'Oceania',
  //       data: [2, 2, 2, 6, 13, 30, 46]
  //   }]
  //   });
  };

</script>