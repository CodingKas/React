import './App.css'
import { UserID } from './types.js';
import UserProfile from "./components/UserProfile";

export default function App(): JSX.Element {

  const userId: UserID = "user-12345";

  return (
    <div className='App'>
      <UserProfile id={userId} name="Alice" age={'thirty'} bio="Loves hiking and reading." />
    </div>
  );
}