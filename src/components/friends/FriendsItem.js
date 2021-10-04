import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function CreateItemFriends({ avatar, name, isOnline }) {
    return (
        <li className={s.friends__item}>
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
    );
}

CreateItemFriends.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
