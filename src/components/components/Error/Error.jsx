import { useDispatch } from 'react-redux';
import style from './Error.module.css';
import { useNavigate } from 'react-router-dom';
import { deleteError } from '../../../redux/actions';

export default function Error({ error }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div>
        <h1>{error}</h1>
        <p>Back to home</p>
        <button
          onClick={() => {
            navigate('/');
            dispatch(deleteError());
          }}
        >
          {'↺'}
        </button>
      </div>
    </div>
  );
}
