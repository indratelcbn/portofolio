<script setup>



</script>
 
<template>

    
<nav id="navbarutama" class="navbar navbar-expand-lg navbar-dark shadow-lg fixed-top mb-5">
  <div id="navbarutama" class="container">
    <a class="navbar-brand" href="#">Indra Budi Darma</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#app">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <router-link to="/Projects" class="nav-link">Projects</router-link>
        </li>
          <li class="nav-item">
            <router-link to="/ContactHome" class="nav-link">Contact</router-link>
          </li>
        <li class="nav-item">
          <router-link to="/HomePage" class="nav-link">Login</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<router-view/>
</template>