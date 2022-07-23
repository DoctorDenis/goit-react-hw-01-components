import { Profile } from './profile/profile';
import { Statistics } from './statisctics/Statistics';
import FriendsList from './friendsList/friendsList';
import TransactionHistory from './transactions/transactionHistory';
import 'normalize.css';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

const { username, tag, location, avatar, stats } = user;

export default function App() {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
