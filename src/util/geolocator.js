export function findGeo(){
  function geoSuccess(position){
    var lat = position.coords.latitude
    var long = position.coords.longitude
    var location = {lat: position.coords.latitude, long: position.coords.longitude}
    return location
  };

  function geoError(){
    alert("Sorry we couldn't get your location")
  };

  if ("geolocation" in navigator) {
    // alert("worked")
    return navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    alert("Looks like your browser doesn't support this functionality. Please enter it in the search field.")
  }

}
