import { useQuery } from "@tanstack/react-query";
import { listOfAllUsers } from "../../api/api";
import UserCard from "./UserCard";

const Users = () => {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: listOfAllUsers,
  });

  if (usersQuery.isLoading) return <h1>Loading</h1>;
  if (usersQuery.isError) return <pre>{JSON.stringify(usersQuery.error)}</pre>;

  return (
    <>
      <h1>List of Users</h1>

      {usersQuery.data ? (
        usersQuery.data.map((user) => (
          <UserCard
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
