<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import navbar from "./components/navbar.vue"
  import Jumbotron from "./components/jumbotron.vue"
  import about from "./components/about.vue"
  import projects from './components/projects.vue'
  import contact from './components/contact.vue'
  import footers from './components/footers.vue'
</script>



<template>

  <navbar/>
  <jumbotron/>
  <about/>
  <projects/>
  <contact/>
  <footers/>
  
</template>

<style scoped>
</style>
