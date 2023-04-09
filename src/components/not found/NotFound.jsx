import { useDispatch } from 'react-redux';
import style from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';
import { deleteError } from '../../redux/actions';

export default function NotFound() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div>
        <h1>Oops! the address you want to go to does not exist</h1>
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
