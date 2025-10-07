import React from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

const UserList = ({ users, filter }) => {
  const lowerFilter = filter.toLowerCase();

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(lowerFilter);
  });
  return (
    <ul>
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

const mapStateToProps = (item) => ({
  users: item.users,
  filter: item.filter,
});
export default connect(mapStateToProps)(UserList);
