
function setCity(){
  localStorage.setItem("savedCity", city)
}

function getCity(){
  localStorage.getItem("savedCity")
}

function submit(){
  city = $("#city-name").val();
  var queryURL = "http://api.weatherapi.com/v1/forecast.json?key=bc100a5652e84c4cb0520112202503&q=" + city + "&days=6"
  $(".box3").empty()
  $(".box4").empty()
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response) {
        console.log(response)
        var newCurrent = $("<div>");
        
        var currentDate = $("<p>");
        currentDate.text("Today")
        var currentTemp = $("<p>");
        currentTemp.text("Current temp: " + response.current.temp_f)
        var currentCondition = $("<p>");
        currentCondition.text("Current condition: " + response.current.condition.text)

        newCurrent.addClass("newDiv")

        newCurrent.append(currentDate);
        newCurrent.append(currentTemp);
        newCurrent.append(currentCondition);
        $(".box3").append(newCurrent)

      for(i=0; i<6; i++){
        console.log(response.forecast.forecastday[i].day.maxtemp_f);
        var newDiv = $("<div>");
        var date = $("<p>");
        date.text(response.forecast.forecastday[i].date)
        var tempHigh = $("<p>");
        tempHigh.text("High: " + response.forecast.forecastday[i].day.maxtemp_f)
        var tempLow = $("<p>");
        tempLow.text("Low: " + response.forecast.forecastday[i].day.mintemp_f)
        var condition = $("<p>");
        condition.text("Weather condition: " + response.forecast.forecastday[i].day.condition.text)

        newDiv.addClass("newDiv")

        newDiv.append(date);
        newDiv.append(tempHigh);
        newDiv.append(tempLow);
        newDiv.append(condition);
        $(".box4").append(newDiv)
      };
    });
};

$("#submit").on("click", submit)
