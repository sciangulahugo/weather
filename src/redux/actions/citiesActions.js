export const GET_CITY_WEATHER = 'GET_CITY_WEATHER';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export const getCityWeather = (city) => {
    return function (dispatch) {
        return fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
            .then((response) => response.json())
            .then((json) => {
                if (json.cod !== 400) {
                    const ciudad = {
                        id: json.id,
                        temp: Math.round(json.main.temp),
                        min: Math.round(json.main.temp_min),
                        max: Math.round(json.main.temp_max),
                        img: json.weather[0].icon,
                        wind: json.wind.speed,
                        temp: json.main.temp,
                        name: json.name,
                        weather: json.weather[0].main,
                        clouds: json.clouds.all,
                        latitud: json.coord.lat,
                        longitud: json.coord.lon,
                    };
                    console.log(ciudad.temp);
                    dispatch({
                        type: GET_CITY_WEATHER,
                        payload: ciudad,
                    });
                }
            });
    };
};
