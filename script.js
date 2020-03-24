
//TODO: collect city from user input search bar
//TODO: use an ajax method to call api and get the info from that city

var queryURL = "api.openweathermap.org/data/2.5/weather?q=seattle&appid=1d5a21ab353d52787a108e6591a64d4c"

$.ajax({
    url: queryURL,
    method: "GET"
  })

  //promise to do what we do when we get the information
    .then(function(response) {
        console.log(response)
    
    });

//TODO: collect the nessacary info from the api (5 day forcast, current temp, current weather etc.)
//TODO: use local storage to save the latest results
//TODO: display it back on the screen 