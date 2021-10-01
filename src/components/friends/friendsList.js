import PropTypes from 'prop-types';
import s from './Friend.module.css';

// function statusFriends({ friends }) {
//     if (friends.isOnline === 'true') {
//         return 'rgb(5, 134, 23)';
//     } else {
//         return 'rgb(204, 33, 10)';
//     }
// }
export default function FriendsList({ friends }) {
    return (
        <div className={s.friends}>
            <ul className={s.friends__list}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li key={id} className={s.friends__item}>
                        <span class={s.status}>
                            {isOnline}
                            {/* style={{ color: statusFriends(isOnline) }} */}
                        </span>
                        <img
                            className={s.avatar}
                            src={avatar}
                            alt={name}
                            width="48"
                        />
                        <p className={s.name}>{name}</p>
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
        }),
    ),
};
