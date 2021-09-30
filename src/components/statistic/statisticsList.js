import PropTypes from 'prop-types';

const createRandomColor = () => {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
};

export default function Statistics({ title, stats }) {
  return (
    <section>
      {title && <h2>{title.toUpperCase()}</h2>}
      <ul>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} style={{ backgroundColor: createRandomColor() }}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};