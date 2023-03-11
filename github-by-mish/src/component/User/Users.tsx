import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { listOfAllUsers } from "../../api/api";
import SearchUser from "../Search/SearchUser";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [searchQueryValue, setSearchQueryValue] = useState<string>("");
  const debouncedSearchQueryValue = useDebounce<string>(searchQueryValue, 500);

  useEffect(() => {
    getRepositories();
  }, []);

  async function getRepositories() {
    const users = await listOfAllUsers();
    setUsers(users);
  }

  const filteredUsers = users?.filter((user) =>
    user.login.toLowerCase().includes(debouncedSearchQueryValue.toLowerCase())
  );

  return (
    <>
      <h1>List of Users</h1>
      <p>Value real-time: {searchQueryValue}</p>
      <p>Debounced value: {debouncedSearchQueryValue}</p>

      <SearchUser
        value={searchQueryValue}
        onChange={(event) => setSearchQueryValue(event.target.value)}
      />
      {filteredUsers ? (
        filteredUsers.map((user) => (
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
