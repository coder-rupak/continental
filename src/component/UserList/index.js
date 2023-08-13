const UserList = (props) => {
  const userClick = (user) => {
    alert(
      user.name +
        " has " +
        user.follower +
        " followers and " +
        user.following.length +
        " following"
    );
  };

  return (
    <div>
      <h4>UserList</h4>
      {props.users?.map((item, index) => (
        <p key={index} onClick={() => userClick(item)}>
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default UserList;
