// Create variables for API key and city selector
var apiKey = "14b6b5eb484bfeb72ae69cd2216e5328";
var citySelector = document.getElementById("search-input");
// Created variable for the queryURL to make the API call
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=" + apiKey;
var selectedCity = localStorage.getItem("city");

// Add event listener to the search field
citySelector.addEventListener("submit", function(event) {
    event.preventDefault();
    var city = citySelector.value.trim();
    localStorage.setItem("city", city);
});

fetch(url)
    .then(response => response.json())
    .then(data => {

    })
  .catch(() => {
    msg.textContent = "Please search for a valid city";
    });