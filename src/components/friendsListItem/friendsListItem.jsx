import PropTypes from 'prop-types';
import styles from './friendsListItem.module.css';

export default function FriendsListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={styles.item}>
      <span
        className={styles.status.concat(
          ' ',
          isOnline ? styles.online : styles.offline
        )}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt={name + ' avatar'}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
