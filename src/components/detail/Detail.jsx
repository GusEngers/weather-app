import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchId } from '../../redux/actions';
import Loading from '../components/Loading/Loading';
import { DetailCard } from '../components/Cards/Cards';

export default function Detail() {
  const dispatch = useDispatch();
  const { city, loading, error } = useSelector((state) => state);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(searchId(id));
  }, []);

  if (loading && !Object.entries(city).length) {
    return (
      <div
        style={{
          minHeight: '73vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loading />
      </div>
    );
  } else if (!!error) {
    return <h1>{error}</h1>;
  } else if (!!Object.entries(city).length) {
    return <DetailCard city={city}/>;
  }
}
