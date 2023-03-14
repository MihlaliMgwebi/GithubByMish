import { useQuery } from "@tanstack/react-query";
import { getPubliclyAvailableUserInfo } from "../../api/api";
import { userPropType } from "../../props/propTypes";

const UserCard = (props: userPropType) => {
  const username = props.user.login;
  const userByIdQuery = useQuery(["users", username], () =>
    getPubliclyAvailableUserInfo(username)
  );
  return (
    <>
      <button
        onClick={() => {
          console.log(userByIdQuery.data);
        }}>
        <img
          src={props.user.avatar_url}
          alt='User avatar'
        />
        {username}
      </button>
    </>
  );
};

export default UserCard;
