import { userPropType } from "../../props/propTypes";

const User = (props: userPropType) => {
  return (
    <>
      <img
        src={props.user.avatar_url}
        alt='User avatar'
      />
      <button>Username: {props.user.login}</button>
      <div>{}</div>
    </>
  );
};

export default User;
