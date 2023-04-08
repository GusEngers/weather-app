import { useSelector } from 'react-redux';
import style from './Favorites.module.css';
import { FavoriteCard } from '../components/Cards/Cards';

export default function Favorites() {
  const { cities } = useSelector((state) => state);

  if (!cities.length) {
    return (
      <div className={style.container}>
        <div className={style.container_text}>
          <h1>Ups!!</h1>
          <h3>You haven't added any city to favorites yet</h3>
          <span>{'🕵'}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <div className={style.container_favorite}>
          {cities.map((city) => (
            <FavoriteCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    );
  }
}
