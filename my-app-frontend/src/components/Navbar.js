import { Route, Switch, Link } from "react-router-dom";
import LogInPage from "./LogInPage"
import Cart from "./Cart"
function Navbar() {
    return(

       <LogInPage/>
       <Cart />
    )
}
export default Navbar;