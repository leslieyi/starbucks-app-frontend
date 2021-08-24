import { NavLink } from "react-router-dom";
const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#00f000",
  textDecoration: "none",
  color: "rgba(255,255,255,.87)",
};

function Navbar() {

  return (
    <div>
      <NavLink
      to="/login"
      exact
      style={linkStyles}
      activeStyle={{
        background: "#1db954",
      }}>
        Login
      </NavLink>
      <NavLink
      to="/register"
      exact
      style={linkStyles}
      activeStyle={{
        background: "#1db954"
      }}>
        Register
      </NavLink>
      <NavLink
      to="/cart"
      exact
      style={linkStyles}
      activeStyle={{
        background: "#1db954"
      }}>
        Cart
      </NavLink>
    </div>
  )
}
export default Navbar;
