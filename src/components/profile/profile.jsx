import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileAvatar,
  Username,
  Tag,
  Location,
  Stats,
  Li,
  Label,
  Number,
} from './profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt={username} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location className="location">{location}</Location>
      </ProfileDescription>

      <Stats className="stats">
        <Li>
          <Label className="label">Followers</Label>
          <Number className="quantity">{followers}</Number>
        </Li>
        <Li>
          <Label className="label">Views</Label>
          <Number className="quantity">{views}</Number>
        </Li>
        <Li>
          <Label className="label">Likes</Label>
          <Number className="quantity">{likes}</Number>
        </Li>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
