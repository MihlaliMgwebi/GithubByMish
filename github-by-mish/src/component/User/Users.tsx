import { useEffect, useState } from "react";
import { listOfAllUsers } from "../../api/api";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {
    getRepositories();
  }, []);

  async function getRepositories() {
    const users = await listOfAllUsers();
    setUsers(users);
  }

  return (
    <>
      <h1>List of Users</h1>
      {users ? (
        users.map((user) => (
          <User
            key={user.id}
            user={user as IUserInfo}
          />
        ))
      ) : (
        <p>Unknown</p>
      )}
    </>
  );
};

export default Users;
