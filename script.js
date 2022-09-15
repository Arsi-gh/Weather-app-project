let backgroundUrls = ['/weather.jpg' , '/Weather-Images-HD.jpg' , '/WSjKlp7.jpg']
let randomNum
(function(){
    randomNum = Math.floor(Math.random() * 3)
    document.body.style.backgroundImage = 'url(' + backgroundUrls[randomNum] + ')'
})()
let citiesInfo = [
  { city: "tehran", temp: 9, cityStatus: "windy", humidity: 15, windSpeed: 2 },
  { city: "shiraz", temp: 8, cityStatus: "windy", humidity: 20, windSpeed: 3 },
  {city: "esfahan", temp: 10, cityStatus: "Sunny", humidity: 10, windSpeed: 4,},
];

let searchButton = document.querySelector(".button");
let dataContainer = document.querySelector(".bottom-bar");
let cityInput = document.querySelector(".cityInput");
let pElem = document.querySelector(".load");
let citiSelect;
searchButton.addEventListener("click", function () {
  citiSelect = citiesInfo.find(function (item) {
    return item.city === cityInput.value;
  });
  if (citiSelect) {
    dataContainer.innerHTML = null;
    pElem.style.display = "none";   
    dataContainer.innerHTML += "<p class = " + "lg-size"+">" + "Weather in " + citiSelect.city + "</p>";
    dataContainer.innerHTML += "<p class = " + "xl-size"+">" + citiSelect.temp + " °C" + "</p>";
    dataContainer.innerHTML += "<p>" + citiSelect.cityStatus + "</p>";
    dataContainer.innerHTML += "<p>" + "Humidity : " + citiSelect.humidity + "%" + "</p>";
    dataContainer.innerHTML += "<p>" + "Wind speed : " + citiSelect.windSpeed + "km/h" + "</p>";
  } else {
    dataContainer.innerHTML = null;
    dataContainer.innerHTML += '<p style="color: rgb(255, 107, 107);">invalid city name</p>';
  }
});
