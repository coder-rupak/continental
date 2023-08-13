import { useState } from "react";
import InputField from "../InputField";

const UserCreation = (props) => {
  const [name, setName] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      createUser();
    }
  };

  const validate = () => {
    if (name === "") {
      alert("Please enter a user name");
      return false;
    }
    return true;
  };

  const createUser = () => {
    if (validate()) {
      const tempNameList = props.users;
      if (tempNameList.find((e) => e.name === name) === undefined) {
        tempNameList.push({ name: name, follower: 0, following: [] });
        props.setUsers(tempNameList);
        console.log("users", props.users);
        setName("");
      } else {
        alert("User already exits");
      }
    }
  };

  return (
    <>
      <p>Enter user name</p>
      <div>
        <InputField
          value={name}
          setstatevalue={setName}
          onKeyDown={handleKeyDown}
        />
        <button onClick={createUser}>Submit</button>
      </div>
    </>
  );
};
export default UserCreation;
