import { Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Users from "./component/User/Users";

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
          element={<Users />}
        />
      </Routes>
    </>
  );
}

export default App;
