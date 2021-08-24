import Navbar from "./Navbar";
import MainContainer from './MainContainer';
import Aside from "./Aside"
import Cart from './Cart';
import { useState, useEffect } from "react";
import { Route, Switch, Link} from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react'

//npm i && npm start
//npm install react-router-dom
//npm install semantic-ui-react semantic-ui-css

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
      <Navbar />
      <Link to="/">
        <Segment>
          <Header as='h2' textAlign='center'>
            ~~~Welcome to Starbucks~~~
          </Header>
        </Segment>
      </Link>
      <Aside/>

      <Switch>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
        <Route exact path ='/'>
          <MainContainer data = {drinksData}/>
        </Route>

        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  
  )
  
}

export default App;

