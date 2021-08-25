import Navbar from "./Navbar";
import MainContainer from './MainContainer';
import Aside from "./Aside"
import Cart from './Cart';
import RecentOrders from './RecentOrders';
import LogInPage from './LogInPage'
import Register from './Register'
import ShowDrinks from './ShowDrinks'
import { useState, useEffect } from "react";
import { Route, Switch, Link} from 'react-router-dom';
import { Header, Segment, Image } from 'semantic-ui-react'

//npm i && npm start
//npm install react-router-dom
//npm install semantic-ui-react semantic-ui-css
//npm install axios

function App() {
  const [drinksData, setDrinksData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cartDrinks, setCartDrinks] = useState([])
  const [user, setUser] = useState()
  const [ordersData, setOrdersData] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/drinks")
      .then((r) => r.json())
      .then((data) => {
        setDrinksData(data);
      });
  }, []);

  useEffect(() => {
    if(isLoggedIn){
      fetch("http://localhost:9292/orders")
        .then((r) => r.json())
        .then((data) => {
          const datas = data.filter(order => {
            console.log(order)
            console.log(user)
            return order.customer_id === user.id
          })
          setOrdersData(datas);
        });
    }
  }, [user]);

  
  function makeCart(drink){
    setCartDrinks([...cartDrinks, drink])
    // const data = {
    //   customer_id: user.id,
    //   drink_id: drink.id

    // console.log(drink)
    // fetch('http://localhost:9292/drinks_orders', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.log('Error:', error);
    // });
  }
  return (
    <div>
      <Navbar user={user} isLoggedIn={isLoggedIn} cartDrinks={cartDrinks} />
  
      <Link exact to="/">
        <div class="ui center aligned header">
        <Segment>
          <Header as='h2'>
          <Image style={{height:"25px", width:"25px", float: "left"}} src="https://img.icons8.com/ios-filled/50/000000/coffee.png"/>
          Welcome to Spill the Beans
          </Header>
        </Segment>

        </div>
      </Link>
      <Aside setDrinksData={setDrinksData} drinksData={drinksData}/>

      <Switch>
        <Route exact path='/cart'>
          <Cart cartDrinks= {cartDrinks} setCartDrinks={setCartDrinks}/>
        </Route>

        <Route exact path ='/'>
          {drinksData.length === 0 ? null :
          <MainContainer data = {drinksData}/>
          }
        </Route>

        <Route exact path ='/login'>
          <LogInPage setUser={setUser} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        </Route>

        <Route exact path ='/register'>
          <Register/>
        </Route>
        <Route exact path ='/recent-orders'>
          <RecentOrders ordersData={ordersData} user={user}/>
        </Route>
         

        <Route exact path = '/drinks/:id'>
          {drinksData.length === 0 ? null :
          <ShowDrinks data = {drinksData} 
          makeCart={makeCart}/>
          }
        </Route>

        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  
  )
  
}

export default App;

