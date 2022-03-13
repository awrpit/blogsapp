import "./App.css";
import { Routes, Route } from "react-router";

import FirstPage from "./components/FirstPage";
import HomePage from "./components/HomePage";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Users from "./components/Users";
import Blogs from "./components/Blogs";
import NavBar from "./components/Navbar";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="users" element={<Users />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="home" element={<HomePage />} />
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  );
}
export default App;
