import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getCityWeather } from '../../redux/actions/citiesActions.js';
export default function SearchBar() {
    // Definimos nuestra funcion para despachar las acciones:
    const dispatch = useDispatch();

    // Traemos el estado global.
    const { display } = useSelector((state) => state.loader);
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
        if (input === '') alert('Ingresa una ciudad');
        else dispatch(getCityWeather(input));
    }

    console.log(display);

    // const [loading, setLoading] = useState({
    //     state: true,
    // });

    // useEffect(() => {
    //     console.log('Loader modificado');
    //     // changeLoading();
    // }, [loader]);

    // function changeLoading() {
    //     setLoading({
    //         state: !loading.state,
    //     });
    // }
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
            {display ? (
                <button class="btn btn-success" type="button" disabled>
                    <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                </button>
            ) : null}
        </form>
    );
}
