import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./component/Error/NotFound";
import Home from "./component/Home";
import UserInfo from "./component/User/UserInfo";
import UserList from "./component/User/UserList";
import { UsersLayout } from "./component/User/UsersLayout";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/users'
          element={<UsersLayout />}>
          <Route
            index
            element={<UserList />}
          />
          <Route
            path=':username'
            element={<UserInfo />}
          />
        </Route>
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
