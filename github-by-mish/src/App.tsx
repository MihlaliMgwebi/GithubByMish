import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./component/Error/NotFound";
import Home from "./component/Home";
import UserInfo from "./component/User/UserInfo";
import UserList from "./component/User/UserList";

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
          element={<UserList />}
        />
        <Route
          path='/users/:username'
          element={<UserInfo />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
