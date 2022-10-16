import { GET_CITY_WEATHER, DELETE_CITY } from '../actions/citiesActions.js';
const initialState = {
    cities: [],
};

function cities(state = initialState, action) {
    switch (action.type) {
        case GET_CITY_WEATHER:
            return {
                ...state,
                cities: [...state.cities, action.payload],
            };
        case DELETE_CITY:
            return {
                ...state,
                cities: state.cities.filter(
                    (city) => city.id !== action.payload
                ),
            };
        default:
            return state;
    }
}

export default cities;
