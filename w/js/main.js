var app = angular.module('jsbin', []);
app.controller('Ctrl', function($http) {
var vm = this;
var URL = 'https://api.openweathermap.org/data/2.5/weather';

navigator.geolocation.getCurrentPosition(
    function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        var request = {
          method: 'GET',
          url: URL,
          params: {
            lat: lat,
            lon: lon,
            mode: 'json',
            units: 'metric',
            lang: 'ru',
            appid: 'f972879aeef6f855db849291d62b2bef'
          }
        };

        $http(request)
          .then(function(response) {
            vm.data = response.data;
            vm.URL2 = "/img/w/" + vm.data.weather[0].icon + ".png";

            if (vm.data.weather[0].icon  == '01d') {
                var color = '#b0ef6c';
                var top_img = '<img src="/img/w/01d.png">';
                var background_body = 'linear-gradient(#b0ef6c, #b0ef6c, #e2e2e2)';
            } else if (vm.data.weather[0].icon == '02d') {
                var color = '#83c5c2';
                var top_img = '<img src="/img/w/02d.png">';
                var background_body = 'linear-gradient(#83c5c2, #83c5c2, #e2e2e2)';
            } else if (vm.data.weather[0].icon == '03d') {
                var color = '#90b9de';
                var top_img = '<img src="/img/w/03d.png">';
                var background_body = 'linear-gradient(#90b9de, #90b9de, #e2e2e2)';
            } else if (vm.data.weather[0].icon == '04d') {
                var color = '#de7e7e';
                var top_img = '<img src="/img/w/04d.png">';
                var background_body = 'linear-gradient(#de7e7e, #de7e7e, #e2e2e2)';
            } else if (vm.data.weather[0].icon == '09d') {
                var color = '#96c583';
                var top_img = '<img src="/img/w/09d.png">';
                var background_body = 'linear-gradient(#96c583, #96c583, #e2e2e2)';
            } else if (vm.data.weather[0].icon == '10d') {
                var color = '#5a7a8c';
                var top_img = '<img src="/img/w/10d.png">';
                var background_body = 'linear-gradient(#5a7a8c, #5a7a8c, #e2e2e2)';
            } else if (vm.data.weather[0].icon == '11d') {
                var color = '#4981a0';
                var top_img = '<img src="/img/w/11d.png">';
                var background_body = 'linear-gradient(#4981a0, #4981a0, #e2e2e2)';
            } else if (vm.data.weather[0].icon == '13d') {
                var color = '#f1f1f1';
                var top_img = '<img src="/img/w/13d.png">';
                var background_body = 'linear-gradient(#f1f1f1, #f1f1f1, #e2e2e2)';
            } else if (vm.data.weather[0].icon == '50d') {
                var color = '#d6d6d6';
                var top_img = '<img src="/img/w/50d.png">';
                var background_body = 'linear-gradient(#d6d6d6, #d6d6d6, #e2e2e2)';
            } else if (vm.data.weather[0].icon == '01n') {
                var color = '#1e292f';
                var top_img = '<img src="/img/w/01n.png">';
                var background_body = 'linear-gradient(#5451ec, #9198e5)';
            } else if (vm.data.weather[0].icon == '02n') {
                var color = '#274554';
                var top_img = '<img src="/img/w/02n.png">';
                var background_body = 'linear-gradient(#5451ec, #9198e5)';
            } else if (vm.data.weather[0].icon == '03n') {
                var color = '#27363e';
                var top_img = '<img src="/img/w/03n.png">';
                var background_body = 'linear-gradient(#5451ec, #9198e5)';
            } else if (vm.data.weather[0].icon == '04n') {
                var color = '#272c2f';
                var top_img = '<img src="/img/w/04n.png">';
                var background_body = 'linear-gradient(#5451ec, #9198e5)';
            } else if (vm.data.weather[0].icon == '09n') {
                var color = '#0e2735';
                var top_img = '<img src="/img/w/09n.png">';
                var background_body = 'linear-gradient(#5451ec, #9198e5)';
            } else if (vm.data.weather[0].icon == '10n') {
                var color = '#0f3846';
                var top_img = '<img src="/img/w/10n.png">';
                var background_body = 'linear-gradient(#5451ec, #9198e5)';
            } else if (vm.data.weather[0].icon == '11n') {
                var color = '#3f494e';
                var top_img = '<img src="/img/w/11n.png">';
                var background_body = 'linear-gradient(#5451ec, #9198e5)';
            } else if (vm.data.weather[0].icon == '13n') {
                var color = '#1e292f';
                var top_img = '<img src="/img/w/13n.png">';
                var background_body = 'linear-gradient(#5451ec, #9198e5)';
            } else {
                var color = '#637e8c';
                var top_img = '<img src="/img/w/50n.png">';
                var background_body = 'linear-gradient(#5451ec, #9198e5)';
            }
            var background = "<style>.top{background:" + color + ";}</style>";
            document.getElementById('background').innerHTML = background;

            document.getElementById('top_img').innerHTML = top_img;

            var background_body = "<style>@media(min-width: 500px) {body{background:" + background_body + ";}</style>";
            document.getElementById('background_body').innerHTML = background_body;

            if (vm.data.name == 'Dzerzhynsk') {
                var data_name = "Торецк";
            } else {
                var data_name = vm.data.name;
            }
            document.getElementById('data_name').innerHTML = data_name;

            document.getElementById('temp').innerHTML = Math.round(vm.data.main.temp);
          }).
        catch(function(response) {});
    }

);
});
