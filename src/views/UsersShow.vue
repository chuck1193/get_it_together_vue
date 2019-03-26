<template>
  <div class="users-show">
    <div>
      <section class="menu">
        <div class="container-fluid">
         <h1>{{ user.first_name}} {{ user.last_name }}</h1>
          <div class="row cover cover-layer" style="background-image:url(images/home-gray-coffee.jpg)"></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6 menu-card page-indent i200 pt-5">
              <h2 class="stripes"><span class="bb">My lists</span></h2>
              <ul>
                <li>
                  <div v-for="list in user.my_lists">
                       <router-link to="/lists">
                         <h1>{{ list.name }}</h1>
                       </router-link>
                     </div>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-md-6 menu-card page-indent i200 pt-5">
              <h2 class="stripes"><span class="bb">Lists Shared With Me</span></h2>
              <ul>
                <li>
                  <div v-for="list in user.invited_lists">
                    <div>
                    <router-link to="/lists">
                      <h1>{{ list.name }}</h1>
                    </router-link> 
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>

    <div class="container">  
    <highcharts class="chart" :options="chartOptions"></highcharts>
    </div>


    

    <router-link class="btn btn-success button" to="/lists/new"> Make a New List </router-link>
  </div>
</template>

<style>
  #container {
    width: 50%;
    height: 300px;
  }

  #button {
    align: center;
  }
</style>

<script>
import axios from "axios";
import HighchartsVue from 'highcharts-vue'
import {Chart} from 'highcharts-vue'

export default {
  components: {
    highcharts: Chart 
  },
  data: function() {
    return {
      chartOptions: {
                      chart: {
                                type: 'column'
                              },
                      title: {
                          text: 'Tasks'
                      },
                      subtitle: {
                          text: ''
                      },
                      
                      yAxis: {
                          title: {
                              text: ''
                          }
                      },
                      legend: {
                        enabled: false
                      },
                      series: [
                                {
                                  name: 'Pending',
                                  data: []
                                },{
                                name: 'Completed',
                                data: []
                              }
                              ]
                    },
      user: {
              id: "",
              first_name: "", 
              last_name: "",
              email: "",
              my_lists: {
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
              invited_lists: {
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
              },
              errors: [],
              newData: 0
            };
        },

  created: function() {
        var user_id = localStorage.getItem("user_id");
        axios.get("/api/users/" + user_id )
          .then(response => {
            this.user = response.data;
            var params = { 
                        status: "pending"
                        }
            axios.get("/api/tasks/", {params: params})
            .then(response => {
              this.chartOptions.series[0].data.push(response.data.length)
              console.log(response.data.length)
            })

            var params = { 
                        status: "complete"
                        }
            axios.get("/api/tasks/",  {params: params})
            .then(completedTasks => {
              this.chartOptions.series[1].data.push(completedTasks.data.length)
            })
          }).catch(error => {
            this.errors = error.response.data.errors;
            this.$router.push("/login");
          });
      }, 
  methods: {
    } 
  }  

</script>