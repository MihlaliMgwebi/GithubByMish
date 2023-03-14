import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Users from "./component/User/Users";

function App() {
  return (
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
  );
}

export default App;
