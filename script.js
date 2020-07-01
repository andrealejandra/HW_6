$(".col-md-3").css("background-color","#CCD1D1");
$(".card").css({"background-color":"#85C1E9","color":"white"});
$("#mainSearch").css({"border":"1px solid","border-radius":"4px"});

//pre-loaded list of cities
var searchedCities = ["Austin","South Padre Island","Laredo"];

//makes buttons for array searchedCities
function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < searchedCities.length; i++) 
    {
        var a = $("<button>");
        a.addClass("city");
        a.attr("data-name", searchedCities[i]);
        a.text(searchedCities[i]);
        $("#buttons-view").append(a);
    }
};

$(document).ready(".searchedCities");

renderButtons();
//add click function to search button to add new city to list

$("#search").on("click",function(event){
    event.preventDefault();
    var city = $("#addCity").val().trim();
    searchedCities.push(city);
    
    renderButtons();

   var city = $(this).attr("data-city");
   var apiKey = "2e5935bfd47246927c6ef21356aed991";

   var queryURL = "https://www.api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ apiKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    var weatherDash = $("<div class = 'mainSearch'>");

    var lat = response.coord.lat
    var lon = response.coord.lon

    var temp = response.main.temp;
    weatherDash.append("Temperature: "+ temp);
    var humid = response.main.humidity;
    weatherDash.append("Humidity: "+ humid);
    var wSpeed= response.wind.speed;
    weatherDash.append("Wind Speed: "+ wSpeed);

    queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=hourly,minutely&appid="+ apiKey;
 
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
         
    var icon = response.weather.icon;
    var iCon = $("<i>").append(icon);
    weatherDash.append(iCon);
    var UV= daily.uvi;
    weatherDash.append(UV);
    }
)
});
});