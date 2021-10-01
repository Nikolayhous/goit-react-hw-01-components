import PropTypes from 'prop-types';
import defaultImage from '../profile/default.jpg';
import s from './Profile.module.css';

export default function Profile({
    avatar = defaultImage,
    name,
    tag,
    location,
    stats: { followers, views, likes },
}) {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={s.avatar}
                />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.list}>
                <li className={s.item}>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{followers}</span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{views}</span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
