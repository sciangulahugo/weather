import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getCityWeather } from '../../redux/actions/citiesActions.js';
export default function SearchBar() {
    // Definimos nuestra funcion para despachar las acciones:
    const dispatch = useDispatch();

    // Definimos un input:
    const [input, setInput] = useState('');

    // Evitamos que recargue la pagina:
    function handleSubmit(e) {
        e.preventDefault();
    }

    // Guardamos cada uno de los cambios:
    function handleChange(e) {
        setInput(e.target.value);
    }

    // Despachamos lo que esta en el input
    function sendInput() {
        dispatch(getCityWeather(input));
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="d-flex"
            role="search"
        >
            <input
                onChange={(e) => handleChange(e)}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            ></input>
            <button
                onClick={() => {
                    sendInput();
                }}
                className="btn btn-outline-success"
                type="submit"
            >
                Search
            </button>
        </form>
    );
}
