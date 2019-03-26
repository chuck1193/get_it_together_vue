<template>
  <div id="app">

    <header>
      <div class="container d-none d-sm-block logo">
        <a href="index.html"><img class="img-fluid" src="/images/logos/logo.png" alt="Logo"></a>
      </div>
      <div class="container my-2 my-md-4">
        <nav class="navbar navbar-expand-sm navbar-light">
          <a class="navbar-brand d-sm-none" href="index.html"><img class="img-fluid" src="/images/logos/logo-xs.png" alt=""></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse justify-content-sm-center" id="main-navbar">
            <ul class="navbar-nav">
    
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <router-view/>

    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="divider"></div>
            <div class="text-center">
              <a href="index.html"><img src="/images/logos/logo.png" alt="" class="logo"></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-9">
            <ul class="footer-links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="blog-index.html">List</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-3">
            <p>© Get it Together 2019</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
</style>

<script type="text/javascript" src="UsersShow.vue"></script> 
<script type="text/javascript" src="TasksShow.vue"></script>
<script type="text/javascript">
  
</script>
