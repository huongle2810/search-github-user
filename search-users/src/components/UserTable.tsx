import React from "react";
import { useSelector } from "react-redux";
import { selectUsers, selectLoading } from "../redux/users/slicedUsers";
import { LoadingSpinner } from "./LoadingSpinner";
import { LazyLoadImage } from "react-lazy-load-image-component";

const UserTable: React.FC = () => {
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);

  if (!loading && users.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
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
                  <LazyLoadImage
                    src={user.avatar_url}
                    alt={user.login}
                    width={40}
                    height={40}
                  />
                </td>
                <td>{user.login}</td>
                <td>{user.type}</td>
                <td>{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
