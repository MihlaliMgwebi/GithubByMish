import { repositoryPropType } from "../../props/prop-types";

const Repository = (props: repositoryPropType) => {
  return (
    <>
      <h1>(Child) Repository</h1>
      <div>
        <p>Full Name: {props.repository.full_name ?? "Unknown"}</p>
      </div>
    </>
  );
};

export default Repository;
