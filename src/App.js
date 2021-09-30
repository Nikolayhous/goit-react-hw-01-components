import Profile from './components/profile/profile';
import Statistics from './components/statistic/statisticsList';
import user from './json-files/user.json';
import statisticalData from './json-files/statistical-data.json';

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
      <Statistics title="Upload stats" stats={statisticalData} />;
    </container>
  );
}
