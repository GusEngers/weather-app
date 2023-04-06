import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchName } from '../../redux/actions';

export default function Home() {
  const { cities, city, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(searchName(search));
        }}
      >
        <input
          type="text"
          placeholder="City name..."
          onChange={(event) => handleSearch(event)}
        />
        <input type="submit" value="Search" />
      </form>
      <div>
        {!!Object.entries(city).length ? (
          <h1>{city.name}</h1>
        ) : !!error ? (
          <h1>{error}</h1>
        ) : null}
      </div>
    </div>
  );
}
