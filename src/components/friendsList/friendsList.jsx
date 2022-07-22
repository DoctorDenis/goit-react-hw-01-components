import PropTypes from 'prop-types';
import FriendsListItem from 'components/friendsListItem/friendsListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendsListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()),
};
