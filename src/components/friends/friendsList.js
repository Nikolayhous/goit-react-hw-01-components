import PropTypes from 'prop-types';

export default function FriendsList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id}>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
