import { searchUserPropType } from "../../props/propTypes";

const SearchUser = (props: searchUserPropType) => {
  return (
    <>
      <div>
        Search:
        <input
          type='text'
          placeholder='Search by Username...'
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
};

export default SearchUser;
