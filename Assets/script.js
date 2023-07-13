// Create variables for API key and city selector
var apiKey = "14b6b5eb484bfeb72ae69cd2216e5328";
var citySelector = document.querySelector(".search-input");
// Created variable for the queryURL to make the API call
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;