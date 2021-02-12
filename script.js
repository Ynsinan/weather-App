var weather = {
    "apiKey": "eb28a26b82f2355194c831d9ca69f91a",
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));

    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = `Weather in ${name}`;
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector('.description').innerText = `${description}`;
        document.querySelector('.temp').innerText = `${temp} °C`;
        document.querySelector('.humidity').innerText = `Humidity : ${humidity}`;
        document.querySelector('.wind').innerText = `Wind Speed: ${speed}`;
        document.querySelector('.country').innerText = `Country : ${country}`;

        var color = Math.floor(temp);
        console.log(color);
        if (color > 0) {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "#9B2335";

            console.log("asdasdasd");
        } else {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "#34568B";
        }
    },
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    },

};
document.querySelector('.search button').addEventListener('click', function () {
    weather.search();
});
document.querySelector('.search-bar').addEventListener('keyup', function (event) {

    if (event.key == 'Enter') {
        weather.search();
    }
});