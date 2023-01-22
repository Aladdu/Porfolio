<script>
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 40.730610, lng: -73.935242},
      zoom: 12,
      mapTypeId: 'satellite',
      tilt: 45
    });
  }
</script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
