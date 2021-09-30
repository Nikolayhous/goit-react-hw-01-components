import Profile from './components/profile/profile';
import Statistics from './components/statistic/statisticsList';
import FriendList from './components/friends/friendsList';
import TransactionHistory from './components/transaction-history/transactionHistory';
import user from './json-files/user.json';
import statisticalData from './json-files/statistical-data.json';
import friends from './json-files/friends.json';
import transactions from './json-files/transaction.json';

export default function App() {
  return (
    <container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        imgUrl={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload tats" stats={statisticalData} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </container>
  );
}
