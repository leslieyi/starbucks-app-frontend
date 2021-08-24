import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { Menu } from 'semantic-ui-react'

function Navbar({ isLoggedIn, user, cartDrinks }) {

  return (
    <Menu>
      {user ? 
      <>
        <Menu.Item>Hello, {user.name}!</Menu.Item>
        <Menu.Item>Logout</Menu.Item>
      </>
      :
      <>
        <Menu.Item>Please Log In</Menu.Item>
        <NavLink to='/login'><Menu.Item>Login</Menu.Item></NavLink>
      </>
      }

  
      <NavLink to='/cart'> <Menu.Item>Cart {cartDrinks.length == 0 ? "is Empty" : cartDrinks.length}</Menu.Item></NavLink>
      <NavLink to='/recent-orders'> <Menu.Item>Recent Orders</Menu.Item></NavLink>
      <NavLink strict to='/'><Menu.Item>Home</Menu.Item></NavLink>
      <NavLink to='/register'> <Menu.Item>Register</Menu.Item></NavLink>
    </Menu>
  );
}
export default Navbar;
