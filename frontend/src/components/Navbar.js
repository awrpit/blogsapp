import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <NavLink to="home"> Home </NavLink>
      <NavLink to="users"> Users </NavLink>
      <NavLink to="blogs"> Blogs </NavLink>
    </>
  );
}

export default NavBar;
