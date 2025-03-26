import { UserID } from '../types.js';

// Define an interface for the user's data
interface UserProfileProps {
    id: UserID;
    name: string;
    age: number;
    bio?: string; // Optional property
  }
  
  const UserProfile: React.FC<UserProfileProps> = ({ id, name, age, bio }) => {
    return (
      <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p>User ID: {id}</p>
        {bio && <p>Bio: {bio}</p>}
      </div>
    );
  };

  export default UserProfile;