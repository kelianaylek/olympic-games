<template>
  <div class="home">
    <h1>Visit the olympics locations !</h1>
    <LocationsList></LocationsList>
  </div>
</template>

<script>
// @ is an alias to /src

import LocationsList from '@/components/LocationsList.vue'

export default {
  name: 'Home',
  components: {
    LocationsList
  }
}
</script>
<style>
  h1{
    text-align: center;
    margin-top: 20px;
  }
</style>
