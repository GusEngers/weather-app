import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchName } from '../../redux/actions';
import style from './Home.module.css';
import { HomeCard } from '../components/Cards/Cards';
import Loading from '../components/Loading/Loading';

export default function Home() {
  const { city, error, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div className={style.container}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(searchName(search));
          setSearch('')
        }}
      >
        <input
          type="text"
          placeholder="City name..."
          className={style.search}
          onChange={(event) => handleSearch(event)}
        />
      </form>
      <div>
        {!!Object.entries(city).length ? (
          <HomeCard city={city} />
        ) : !!error ? (
          <h1>{error}</h1>
        ) : loading ? (
          <Loading />
        ) : null}
      </div>
    </div>
  );
}
