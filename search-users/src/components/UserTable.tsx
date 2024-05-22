import React from "react";
import { useSelector } from "react-redux";
import { selectUsers, selectLoading } from "../redux/users/slicedUsers";

const UserTable: React.FC = () => {
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && users.length === 0 && <p>No users found</p>}
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Login</th>
            <th>Type</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.avatar_url} alt={user.login} width="50" />
              </td>
              <td>{user.login}</td>
              <td>{user.type}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
