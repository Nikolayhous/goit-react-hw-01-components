import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function FriendsList({ friends }) {
    return (
        <div className={s.friends}>
            <ul className={s.friends__list}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li key={id} className={s.friends__item}>
                        <span
                            className={s.status}
                            style={{
                                backgroundColor: isOnline ? 'green' : 'red',
                            }}
                        >
                            {isOnline}
                        </span>
                        <img className={s.avatar} src={avatar} alt={name} />
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
