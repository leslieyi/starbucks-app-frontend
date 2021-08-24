import Navbar from "./Navbar";
import MainContainer from './MainContainer';
import Aside from "./Aside"
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
    <div>
      <Navbar/>
      <Aside/>
      <Switch>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
        <Route exact path ='/'>
          <MainContainer data = {drinksData}/>
        </Route>
      </Switch>
    </div>
  
  )
  
}

export default App;

