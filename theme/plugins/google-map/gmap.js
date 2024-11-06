window.marker = null;

function initialize() {
  var map;
  // Update with Kihunguro Church coordinates
  var latitude = -1.138270;
  var longitude = 36.970850;
  var mapMarker = $('#map').attr('data-marker'); // Marker image source
  var mapMarkerName = "Kihunguro Church"; // Marker title
  var kihunguro = new google.maps.LatLng(latitude, longitude);
  var style = [
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
              { "saturation": -100 },
              { "lightness": -8 },
              { "gamma": 1.18 }
          ]
      }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              { "saturation": -100 },
              { "gamma": 1 },
              { "lightness": -24 }
          ]
      }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "administrative",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "transit",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "road",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "administrative",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "landscape",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
          "featureType": "poi",
          "stylers": [
              { "saturation": -100 }
          ]
      }, {
      }
  ];
  var mapOptions = {
    center: kihunguro,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    backgroundColor: "#000",
    zoom: 10,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    }
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var mapType = new google.maps.StyledMapType(style, {
    name: "Grayscale"
  });
  map.mapTypes.set('grey', mapType);
  map.setMapTypeId('grey');
  var marker_image = mapMarker;
  var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(40, 60));
  marker = new google.maps.Marker({
    position: kihunguro,
    map: map,
    icon: pinIcon,
    title: mapMarkerName
  });
}
var map = document.getElementById('map');
if (map != null) {
  google.maps.event.addDomListener(window, 'load', initialize);
}
