import { Link, useLocation } from 'react-router-dom';
import logo from '../../../static/images/nube.png';
import style from './NavBar.module.css';

export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <div className={style.container}>
      <div className={style.con_one}>
        <img src={logo} alt="icon weather-app" />
        <h1>WEATHER-APP</h1>
      </div>
      <div className={style.con_two}>
        <Link
          to={'/'}
          style={{
            textDecoration: 'none',
            borderBottom: pathname === '/' ? '1px solid white' : 'none',
          }}
        >
          Home
        </Link>
        <Link
          to={'/favorites'}
          style={{
            textDecoration: 'none',
            borderBottom:
              pathname === '/favorites' ? '1px solid white' : 'none',
          }}
        >
          Favorites
        </Link>
      </div>
    </div>
  );
}
