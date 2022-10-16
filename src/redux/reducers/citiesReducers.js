import { GET_CITY_WEATHER } from '../actions/citiesActions.js';
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
        default:
            return state;
    }
}

export default cities;
