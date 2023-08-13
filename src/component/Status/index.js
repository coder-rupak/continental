export const checkStatus = (
  follower,
  setFollower,
  following,
  setFollowing,
  users,
  setUsers
) => {
  if (follower === "") {
    alert("Please enter the follower name");
  } else if (following === "") {
    alert("Please enter the following name");
  } else {
    var followerObj = users.find((e) => e.name === follower);
    var followingObj = users.find((e) => e.name === following);
    if (followerObj.following.find((e) => e === following) === undefined) {
      followerObj.following.push(following);
      followingObj.follower += 1;
      const tempNameList = users;
      const follwerIndex = tempNameList.findIndex(
        (item) => item.name === followerObj.name
      );
      const follwingIndex = tempNameList.findIndex(
        (item) => item.name === followingObj.name
      );
      tempNameList[follwerIndex] = followerObj;
      tempNameList[follwingIndex] = followingObj;
      setUsers(tempNameList);
      alert(follower + " started following " + following);
      setFollower("");
      setFollowing("");
    } else {
      alert("Followers already following");
    }
  }
};
