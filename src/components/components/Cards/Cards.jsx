import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Cards.module.css';
import { addCity } from '../../../redux/actions';

export function HomeCard({ city }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            dispatch(addCity(city));
          }}
        >
          Favorite
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            navigate(`/city/${city.id}`);
          }}
        >
          Detail
        </button>
      </div>
    </div>
  );
}

/* {
	"weather": {
		"main": "Grupo meteorológico",
		"icon": "Icono"
	},
	"main": {
		"temp": "temperatura",
		"temp_min": "temperatura mínima",
		"temp_max": "temperatura máxima",
	},
	"sys": {
		"country": "Código región"
	},
	"id": "id ciudad",
	"name": "nombre ciudad"
} */
