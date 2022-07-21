<template>
  <div class="locationsList">

    <div id="map"></div>

  </div>


</template>

<script>

export default {
  name: 'LocationsList',

  data() {
    return {
      locationsList: null
    }
  },

  methods: {
    async created() {
      // GET request using fetch with async/await
      const response = await fetch("https://5y4navhe.directus.app/items/olympic_location");
      const data = await response.json();
      this.locationsList = data.data
      console.log(data)

      let map = L.map('map').setView([51.505, -0.09], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 3,
        attribution: '© OpenStreetMap'
      }).addTo(map);

      this.locationsList.map(function(location){
        L.marker([location.latitude, location.longitude]).addTo(map);

      })

    }
  },

  mounted() {
    this.created()
  }

}
</script>
<style>

.locationsList{
  width : 70%;
  margin: 0 auto;
  border: 2px solid white;
  margin-top: 50px;
}
#map { height: 70vh;}

</style>
