<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="nav">
    <router-link to="/" class="nav-link">Block</router-link>
    <router-link to="/cluster" class="nav-link">cluster</router-link>
    <router-link to="/stack" class="nav-link">stack</router-link>
  </div>
  <RouterView />
</template>

<style scoped>
.nav {
  width: 500px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
.nav-link {
  display: block;
  padding: 10px;
}
</style>
