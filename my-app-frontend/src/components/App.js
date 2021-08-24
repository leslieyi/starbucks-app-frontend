import Navbar from "./Navbar";
import MainContainer from './MainContainer';
import LogInPage from "./LogInPage";
import Cart from "./Cart"
import Aside from "./Aside"
import Register from "./Register"
import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import Cart from './Cart';


function App() {
  const [drinksData, setDrinksData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/drinks")
      .then((r) => r.json())
      .then((Data) => {
        setDrinksData(Data);
      });
  }, []);

  return (
    <>
      <header>
        <Navbar />
        <Switch>
          <Route exact path="/login">
            <LogInPage />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path ='/'>
            <MainContainer data = {drinksData}/>
          </Route>
        </Switch>
      </header>
      <MainContainer data={drinksData}/>
      <Aside/>
    </>
  
  )
  
}

export default App;

