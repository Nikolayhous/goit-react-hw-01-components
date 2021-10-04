import PropTypes from 'prop-types';
import CreateItemFriends from './FriendsItem';
import s from './Friend.module.css';

export default function FriendsList({ friends }) {
    return (
        <div className={s.friends}>
            <ul className={s.friends__list}>
                {friends.map(friend => (
                    <CreateItemFriends
                        name={friend.name}
                        avatar={friend.avatar}
                        isOnline={friend.isOnline}
                        key={friend.id}
                    />
                ))}
                ;
            </ul>
        </div>
    );
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
};
