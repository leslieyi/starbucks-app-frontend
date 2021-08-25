import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { Menu } from 'semantic-ui-react'

function Navbar({ user, cartDrinks }) {
  // const { avatar: avatar, name: name } = user;
  console.log(user)
  return (
    <Menu>
      <NavLink strict to='/'><Menu.Item>Home</Menu.Item></NavLink>
      {user ? 
      <>
      <img src={user.avatar} style={{width: "10px", height: "10px"}}/>
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
      <NavLink to='/register'> <Menu.Item>Register</Menu.Item></NavLink>
    </Menu>
  );
}
export default Navbar;
