import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export default function TransactionHistory({ items }) {
    return (
        <div className={s.transactions}>
            <table className={s.transaction__history}>
                <thead>
                    <tr>
                        <th className={s.title__tr}>Type</th>
                        <th className={s.title__tr}>Amount</th>
                        <th className={s.title__tr}>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td className={s.title__td}>{item.type}</td>
                            <td className={s.title__td}>{item.amount}</td>
                            <td className={s.title__td}>{item.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};
