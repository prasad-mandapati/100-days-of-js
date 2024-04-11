const userLocation = document.querySelector(".location");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(setPositon);
});

function setPositon(position) {
  userLocation.innerHTML = `Latitude: ${position.coords.latitude} <br> 
  Longitude: ${position.coords.longitude}`;
}
