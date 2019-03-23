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
                type: 'area'
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
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000;
                    }
                }
            },
            
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                },
                series: {
                  pointStart: Date.UTC(2019, 2, 12),
                  pointInterval: 24 * 3600 * 1000 // one day
                  }
            },

            series: [{
                pointStart: Date.now - 29,
                // pointInterval: 24 * 60 * 60 * 1000, 
                name: 'School',
                data: [502, 635, 809, 0, 1402, 3634, 5268]
            }, {
                name: 'Home',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Work',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'Other',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }]
      });
    }
  }
   
    };

</script>