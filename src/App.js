import Profile from './components/profile/Profile';
import Statistics from './components/statistic/StatisticsList';
import FriendList from './components/friends/FriendsList';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import Container from './components/container/Container';
import user from './json-files/user.json';
import statisticalData from './json-files/statistical-data.json';
import friends from './json-files/friends.json';
import transactions from './json-files/transaction.json';

export default function App() {
    return (
        <Container>
            <Profile
                // {...user} так можливо розпелити всі пропсивластивості компонента профіля
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </Container>
    );
}
