import { Route } from 'react-router-dom';
import Nav from './component/Nav/Nav.jsx';
import Home from './component/Home/Home.jsx';
import Cards from './component/Cards/Cards.jsx';
import { useDispatch } from 'react-redux';
import { getCityWeather } from './redux/actions/citiesActions.js';

function App() {
    const dispatch = useDispatch();
    const getIp = () => {
        fetch(`https://api.ipify.org/?format=json`)
            .then((response) => response.json())
            .then((json) => {
                if (json.ip !== undefined) {
                    fetch(
                        `https://cors-anywhere.herokuapp.com/ip-api.com/json/${json.ip}`,
                        {
                            method: 'GET',
                            headers: {
                                origin: 'sciangula-weather.netlify.app',
                            },
                        }
                    )
                        .then((response) => response.json())
                        .then((json) => {
                            // alert(
                            //     `Vos sos de ${json.city} - ${json.regionName}`
                            // );
                            dispatch(getCityWeather(json.city));
                        })
                        .catch((err) => {
                            console.log('error', err);
                        });
                }
            });

        // fetch(`https://api.ipify.org/?format=json`)
        //     .then((response) => response.json())
        //     .then((json) => {
        //         if (json.ip !== undefined) {
        //             fetch(`http://ip-api.com/json/${json.ip}`)
        //                 .then((response) => response.json())
        //                 .then((json) =>
        //                     alert(
        //                         `Vos sos de ${json.city} - ${json.regionName}`
        //                     )
        //                 );
        //         }
        //     });

        //obtener los datos sin ssl
        // fetch(
        //     'https://cors-anywhere.herokuapp.com/ip-api.com/json/190.183.104.235',
        //     {
        //         method: 'GET',
        //         headers: { origin: 'sciangula-weather.netlify.app' },
        //     }
        // )
        //     .then((response) => response.json())
        //     .then((json) => {
        //         alert(`Vos sos de ${json.city} - ${json.regionName}`);
        //     })
        //     .catch((err) => {
        //         console.log('error', err);
        //     });
    };

    getIp();

    return (
        <>
            <Nav />
            <Route path="/">
                <Cards />
            </Route>
        </>
    );
}

export default App;
