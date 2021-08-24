import {  Link } from "react-router-dom";
import LogInPage from "./LogInPage";
import Cart from "./Cart";
function Navbar() {
  return (
    <nav>
      <LogInPage />
      <h1>Hi from Navbar</h1>
      <Link to='/cart'>Cart</Link>
      <Link strict to='/'>Home</Link>
    </nav>
  );
}
export default Navbar;
