import PropTypes from 'prop-types';
import CreateItemFriends from './FriendsItem';
import s from './Friend.module.css';

export default function FriendsList({ friends }) {
    return (
        <div className={s.friends}>
            <ul className={s.friends__list}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li key={id}>
                        <CreateItemFriends
                            name={name}
                            avatar={avatar}
                            isOnline={isOnline}
                            id={id}
                        />
                    </li>
                ))}
                ;
            </ul>
        </div>
    );
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};
