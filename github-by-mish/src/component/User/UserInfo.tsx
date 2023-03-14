import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { username } = useParams();
  
  return <h1>Sup {username}</h1>;
};

export default UserInfo;
