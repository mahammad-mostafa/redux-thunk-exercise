import PropTypes from 'prop-types';
import Styles from '../styles/user.module.css';

const User = ({ name }) => (
  <li className={Styles.item}>
    <p>
      {name.title}
      {' '}
      {name.first}
      {' '}
      {name.last}
    </p>
  </li>
);

User.propTypes = {
  name: PropTypes.shape({
    title: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
