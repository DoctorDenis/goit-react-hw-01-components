import PropTypes from 'prop-types';
import FriendsListItem from 'components/friendsListItem/friendsListItem';
import styles from './friendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.friend_list}>
      {friends.map(friend => (
        <FriendsListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
