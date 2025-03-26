import './App.css'
import { UserID } from './types';
import UserProfile from "./components/UserProfile";

export default function App(): JSX.Element {

  const userId: UserID = [1273];

  return (
    <div className='App'>
      <UserProfile id={userId} name={321} age={'thirty'} bio="Loves hiking and reading." />
    </div>
  );
}