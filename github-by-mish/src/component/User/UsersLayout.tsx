import { Link, Outlet } from "react-router-dom";

export function UsersLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/users/mojombo'>Book mojombo</Link>
          </li>
          <li>
            <Link to='/users/Mihlali'>Book Mihlali</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
// container presentational copmonent