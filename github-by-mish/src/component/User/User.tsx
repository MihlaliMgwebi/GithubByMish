import { userPropType } from "../../props/propTypes";

const User = (props: userPropType) => {
  return (
    <>
      <h1>{props.user.login}</h1>
    </>
  );
};

export default User;
