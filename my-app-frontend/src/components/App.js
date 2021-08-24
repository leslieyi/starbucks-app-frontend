import Navbar from "./Navbar";
import MainContainer from './MainContainer';
import Aside from "./Aside"
import Cart from './Cart';
import LogInPage from './LogInPage'
import Register from './Register'
import ShowDrinks from './ShowDrinks'
import { useState, useEffect } from "react";
import { Route, Switch, Link} from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react'

//npm i && npm start
//npm install react-router-dom
//npm install semantic-ui-react semantic-ui-css
//npm install axios

function App() {
  const [drinksData, setDrinksData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/drinks")
      .then((r) => r.json())
      .then((data) => {
        setDrinksData(data);
      });
  }, []);

  
  // const [drinksData, setDrinksData] = useState([]);

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
      <Aside setDrinksData={setDrinksData} drinksData={drinksData}/>

      <Switch>
        <Route exact path='/cart'>
          <Cart/>
        </Route>

        <Route exact path ='/'>
          {drinksData.length === 0 ? null :
          <MainContainer data = {drinksData}/>
          }
        </Route>

        <Route exact path ='/login'>
          <LogInPage/>
        </Route>

        <Route exact path ='/register'>
          <Register/>
        </Route>

        <Route path = '/drinks/:id'>
          {drinksData.length === 0 ? null :
          <ShowDrinks data = {drinksData}/>
          }
        </Route>

        {/* path={`${match.url}/:drinksID` */}

        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  
  )
  
}

export default App;

