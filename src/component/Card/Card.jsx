import { useDispatch, useSelector } from 'react-redux';
import { deleteCity } from '../../redux/actions/citiesActions.js';
import { Link } from 'react-router-dom';

export default function Card() {
    const { cities } = useSelector((state) => state.cities);
    const dispatch = useDispatch();

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 mt-2 g-2">
            {cities &&
                cities.map((city) => {
                    return (
                        <div className="col" key={city.id}>
                            <div className="p-2 border rounded">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="h4">{city.name}</p>
                                    <button
                                        onClick={() => {
                                            dispatch(deleteCity(city.id));
                                        }}
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="">
                                    <h2 className="text-center">
                                        {Math.round(city.temp)}° C
                                    </h2>
                                    <a
                                        href={`https://www.google.com/maps/@${city.latitud},${city.longitud},15z`}
                                        target="_blank"
                                    >
                                        map
                                    </a>
                                </div>
                                <div className="row row-cols-3 align-items-center m-0 bg-light border rounded">
                                    <div className="col">
                                        <div className="row row-cols-1 m-0">
                                            <h5 className="text-center">Min</h5>
                                            <h6 className="text-center">
                                                <span className="badge text-bg-primary">
                                                    {Math.round(city.min)}° C
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row row-cols-1 m-0">
                                            <h5 className="text-center">Max</h5>
                                            <h6 className="text-center">
                                                <span className="badge text-bg-primary">
                                                    {Math.round(city.max)}° C
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row row-cols-1">
                                            <div className="col">
                                                <img
                                                    src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
                                                    className="card-img-top"
                                                    alt="..."
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
