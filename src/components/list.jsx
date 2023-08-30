import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetcher } from '../store/users/usersSlice';
import User from './user';
import Styles from '../styles/list.module.css';

const List = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);
  useEffect(() => {
    const promise = dispatch(fetcher());
    return () => promise.abort();
  }, [dispatch]);
  if (loading) {
    return <div className={Styles.indicator}><h2>Loading ...</h2></div>;
  }
  if (error !== undefined) {
    return <div className={Styles.indicator}><h2>{error}</h2></div>;
  }
  if (list.length === 0) {
    return <div className={Styles.indicator}><h2>No Users!</h2></div>;
  }
  return (
    <ul className={Styles.list}>
      {list.map((user) => <User key={user.id.value} name={user.name} />)}
    </ul>
  );
};

export default List;
