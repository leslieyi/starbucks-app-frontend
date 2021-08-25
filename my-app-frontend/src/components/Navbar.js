import { NavLink, Link, Header,} from "react-router-dom";
import EditProfile from "./EditProfile";
import { Menu } from "semantic-ui-react";

function Navbar({ user }) {
  return (
    <Menu style={{marginBottom:"0px", paddingBottom:"0px"}}> 
      {user ? (
        <>
          <NavLink strict to="/">
            <Menu.Item>Home</Menu.Item>
          </NavLink>
          <img
            alt="random"
            src={user.avatar}
            style={{ width: "40px", height: "40px", justifyContent: "center" }}
          />
          <NavLink to="/edit-profile">
            <Menu.Item>Hello, {user.name}!</Menu.Item>
          </NavLink>
          <NavLink to="/logout">
            <Menu.Item>Logout</Menu.Item>
          </NavLink>
        </>
      ) : (
        <>
          <Menu.Item>Please Log In</Menu.Item>
          <NavLink to="/login">
            <Menu.Item>Login</Menu.Item>
          </NavLink>
        </>
      )}

      {user ? (
        <>
          <NavLink to="/recent-orders">
            {" "}
            <Menu.Item> Recent Orders</Menu.Item>
          </NavLink>
        </>
      ) : (
        <NavLink to="/register">
          {" "}
          <Menu.Item>Register</Menu.Item>
        </NavLink>
      )}


    </Menu>
  );
}
export default Navbar;
