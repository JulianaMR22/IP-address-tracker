const ipAddress = document.getElementById("ipAddress");
const locationData = document.getElementById("locationData");
const locationRegion = document.getElementById("locationRegion");
const timeZone = document.getElementById("timeZone");
const isp = document.getElementById("isp");
const inputButton = document.getElementById("inputButton");
const searchInput = document.getElementById("searchInput");

inputButton.addEventListener("click", () => {
  const inputValue = searchInput.value.trim();
  const ip = searchInput.value;
  fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_EogM5fZhVjGODOFSwOtz7vreSn4Qx&ipAddress=${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      ipAddress.innerText = ip;
      locationData.innerText = data.location.country;
      locationRegion.innerText = data.location.region;
      timeZone.innerText = data.location.timezone;
      isp.innerText = data.isp;
    })
    .catch((error) => console.error("Error:", error));
});
