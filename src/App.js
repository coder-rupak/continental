/* 
* Problem Statement
--Write a functional component to display an input field allowing the user to enter a name. When the user submits, the name should be added to a list of names displayed below the input field. Below the list, render two input fields to allow the user to enter two names, and when the user submits, the first name should follow the second name. In other words, the second name should be added to the first name’s following and the first name should be added to the second name’s followers.
-- Show an alert message on clicking the users in the list displaying their followers and following
--Be sure to handle edge cases, like what to do if the user attempts to make a person follow a person that they already follow, or follow themselves, etc.
--Please use reference from public folder

* Write clean and well-structured code with appropriate comments and meaningful variable names.

* Good Luck
*/
import React from "react";
import { useState } from "react";
import InputField from "./component/InputField";
import UserList from "./component/UserList";
import { checkStatus } from "./component/Status";
import "./styles.css";
import UserCreation from "./component/UserCreation";

const App = () => {
  /**
   * This states will hold the value for the input field
   */

  const [follower, setFollower] = useState("");
  const [following, setFollowing] = useState("");

  // This state will hold an array of users
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      <UserCreation users={users} setUsers={setUsers} />
      <UserList users={users} />
      <div>
        <InputField value={follower} setstatevalue={setFollower} />
        &nbsp; will now follow &nbsp;
        <InputField value={following} setstatevalue={setFollowing} />
        <button
          onClick={() =>
            checkStatus(
              follower,
              setFollower,
              following,
              setFollowing,
              users,
              setUsers
            )
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
