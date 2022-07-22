import PropTypes from 'prop-types';

export default function FriendsListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <li className="item">
      <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
      <img className="avatar" src={avatar} alt={name + ' avatar'} width="48" />
      <p className="name">{name}</p>
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
