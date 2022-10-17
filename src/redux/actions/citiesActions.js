/**
 * Preparamos el loader para poder mostrarlo.
 */
import { startLoading, finishLoading } from '../actions/loaderActions.js';

export const GET_CITY_WEATHER = 'GET_CITY_WEATHER';
export const DELETE_CITY = 'DELETE_CITY';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export const getCityWeather = (city) => {
    return function (dispatch) {
        dispatch(startLoading());
        return fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
            .then((response) => response.json())
            .then((json) => {
                //if (json.main !== undefined) {
                const ciudad = {
                    id: json.id,
                    temp: json.main.temp,
                    min: json.main.temp_min,
                    max: json.main.temp_max,
                    img: json.weather[0].icon,
                    wind: json.wind.speed,
                    name: json.name,
                    weather: json.weather[0].main,
                    clouds: json.clouds.all,
                    latitud: json.coord.lat,
                    longitud: json.coord.lon,
                };
                dispatch({
                    type: GET_CITY_WEATHER,
                    payload: ciudad,
                });
                //}
                dispatch(finishLoading());
            })
            .catch((e) => {
                alert('Ciudad no encontrada');
                dispatch(finishLoading());
            });
    };
};

export const deleteCity = (id) => {
    return {
        type: DELETE_CITY,
        payload: id,
    };
};
