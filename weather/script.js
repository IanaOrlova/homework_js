
window.onload = function () {
    var APIKey = "8264281041147d9a5ec6fcb61f798642";
    var city = document.querySelector('input');
    var weatherBtn = document.getElementById("weatherBtn");
    var mistake = document.getElementById("error");
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var mapContainer = document.getElementById('map');


    document.forms.weather.onsubmit = function (e) {
        e.preventDefault();
    };


    weatherBtn.onclick = function () {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q='
            + city.value + '&appid=' + APIKey + "&units=metric&lang=ru";

        var xhr = new  XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();

        if (xhr.status != 200) {
            mistake.innerHTML = ' City not found';
            console.log(xhr.status + ' City ' + xhr.statusText);
            }else {
            mistake.innerHTML = ' ';
            var DATA = JSON.parse(xhr.responseText);
            var date = document.getElementById("date");
            var temp = document.getElementById("temp");
            var cityName = document.getElementById("city");
            var weathe = document.getElementById("weather");
            var cityCoord = DATA.coord;
            cityName.innerHTML = DATA.name;
            date.innerHTML = day + "/" + month + "/" + year;
            temp.innerHTML = Math.round(+DATA.main.temp)+' &deg;C';
            weathe.innerHTML = DATA.weather[0].main + '  <img src="http://openweathermap.org/img/w/'+ DATA.weather[0].icon + '.png" alt="' + 'DATA.weather[0].main">';
            console.log(DATA);

        }


        showMap(mapContainer,cityCoord );

                function showMap(mapContaine, coords) {
            var center = new google.maps.LatLng(coords.lat, coords.lon);

            var marker = new google.maps.Marker({
                position: center,
                animation: google.maps.Animation.BOUNCE
            });

            var mapProp= {
                center: center,
                zoom: 5,
                zoomControl:false,

            };
            var map = new google.maps.Map(mapContainer, mapProp);
            marker.setMap(map);

        }

    };

};
