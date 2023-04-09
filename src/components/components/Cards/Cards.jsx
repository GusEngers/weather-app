import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Cards.module.css';
import { addCity, deleteCity } from '../../../redux/actions';

export function HomeCard({ city }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cities } = useSelector((state) => state);

  const isFavorite = () => {
    if (!cities.find((ct) => ct.id === city.id)) return false;
    return true;
  };

  return (
    <div className={style.container}>
      <div>
        <h1>{`${city.name}, ${city.sys.country}`}</h1>
        <img
          src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt={city.name}
        />
        <h3>{city.weather[0].main}</h3>
      </div>
      <div>
        <h3>{`${city.main.temp}°C`}</h3>
        <h3>Maximun Temperature:</h3>
        <p>{`${city.main.temp_max}°C`}</p>
        <h3>Minimun Temperature:</h3>
        <p>{`${city.main.temp_min}°C`}</p>
      </div>
      <div>
        <button
          onClick={(event) => {
            event.preventDefault();
            if (isFavorite()) {
              dispatch(deleteCity(city.id));
            } else {
              dispatch(addCity(city));
            }
          }}
        >
          {isFavorite() ? 'Favorite ♥' : 'Favorite ♡'}
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            navigate(`/city/${city.id}`);
          }}
        >
          {'Detail →'}
        </button>
      </div>
    </div>
  );
}

export function FavoriteCard({ city }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={style.container_fav}>
      <h1>{city.name}</h1>
      <img
        src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
        alt={city.name}
      />
      <h3>{`${city.main.temp}°C`}</h3>
      <div>
        <button
          onClick={(event) => {
            event.preventDefault();
            dispatch(deleteCity(city.id));
          }}
        >
          {'♥'}
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            navigate(`/city/${city.id}`);
          }}
        >
          {'→'}
        </button>
      </div>
    </div>
  );
}

export function DetailCard({ city }) {
  const addDate = (miliseconds) => {
    let date = new Date(miliseconds);
    return `${date.getHours()}:${date.getMinutes()}Hs.`;
  };

  return (
    <div className={style.dc_container}>
      <div className={style.dc_con}>
        <h1>{`${city.name}, ${city.sys.country}`}</h1>
        <h3>Coordinates</h3>
        <p>{`Longitude: ${city.coord.lon}`}</p>
        <p>{`Latitude: ${city.coord.lat}`}</p>
        <h3>Clouds</h3>
        <p>{`${city.clouds.all}%`}</p>
        <h3>Wind</h3>
        <p>{`${city.wind.speed}m/s at ${city.wind.deg}°`}</p>
        <h3>Visibility</h3>
        <p>{`${city.visibility}m`}</p>
        <h3>Humidity</h3>
        <p>{`${city.main.humidity}%`}</p>
        <h3>Sunrise</h3>
        <p>{addDate(city.sys.sunrise)}</p>
      </div>
      <div className={style.dc_con}>
        <img
          src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt={city.name}
        />
        <h1>{city.weather[0].main}</h1>
        <p>{city.weather[0].description}</p>
        <h1>{`${city.main.temp}°C`}</h1>
        <h3>Thermal Sensation</h3>
        <p>{`${city.main.feels_like}°C`}</p>
        <h3>Maximun</h3>
        <p>{`${city.main.temp_max}°C`}</p>
        <h3>Minimun</h3>
        <p>{`${city.main.temp_min}°C`}</p>
        <h3>Pressure</h3>
        <p>{`${city.main.pressure}hPa`}</p>
      </div>
    </div>
  );
}
