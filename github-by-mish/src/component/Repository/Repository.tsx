import { repositoryPropType } from "../../props/propTypes";

const Repository = (props: repositoryPropType) => {
  return (
    <>
      <h2>(Child) Repository</h2>
      <div>
        <p>Full Name: {props.repository.full_name ?? "Unknown"}</p>
      </div>
    </>
  );
};

export default Repository;
