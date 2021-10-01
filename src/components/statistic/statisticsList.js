import PropTypes from 'prop-types';
import s from './Statistical.module.css';

const createRandomColor = () => {
    return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
        (Math.random() * 255) << 0
    })`;
};

export default function Statistics({ title, stats }) {
    return (
        <div className={s.statics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.list}>
                {stats.map(({ id, label, percentage }) => (
                    <li
                        key={id}
                        style={{ backgroundColor: createRandomColor() }}
                        className={s.item}
                    >
                        <span className={s.label}>{label}</span>
                        <span className={s.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};
