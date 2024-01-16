const ipAddress = document.getElementById("ipAddress");
const locationData = document.getElementById("locationData");
const locationRegion = document.getElementById("locationRegion");
const timeZone = document.getElementById("timeZone");
const isp = document.getElementById("isp");
const inputButton = document.getElementById("inputButton");
const searchInput = document.getElementById("searchInput");
const maps = document.getElementById("maps");
let map = L.map("maps").setView([0, 0], 2);

inputButton.addEventListener("click", () => {
  const inputValue = searchInput.value.trim();
  const ip = searchInput.value;
  fetch(`https://ipapi.co/${inputValue}/json/`)
    .then((response) => response.json())
    .then((data) => {
      const latitude = data.latitude;
      const longitude = data.longitude;
      map.setView([latitude, longitude], 5);

      L.marker([latitude, longitude]).addTo(map);
    })
    .catch((error) => console.log("Error:", error));

  fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_EogM5fZhVjGODOFSwOtz7vreSn4Qx&ipAddress=${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      ipAddress.innerText = ip;
      locationData.innerText = data.location.country;
      locationRegion.innerText = data.location.region;
      timeZone.innerText = data.location.timezone;
      isp.innerText = data.isp;
    })

    .catch((error) => console.error("Error:", error));
});
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
