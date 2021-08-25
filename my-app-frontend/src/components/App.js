import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import Aside from "./Aside";
import RecentOrders from "./RecentOrders";
import LogInPage from "./LogInPage";
import Logout from "./Logout";
import EditProfile from './EditProfile'
import Register from "./Register";
import ShowDrinks from "./ShowDrinks";
import { useState, useEffect } from "react";
import { Route, Switch, Link, Redirect} from "react-router-dom";
import { Header, Segment, Image } from "semantic-ui-react";

//npm i && npm start
//npm install react-router-dom
//npm install semantic-ui-react semantic-ui-css
//npm install axios

function App() {
  const [drinksData, setDrinksData] = useState([]);
  const [cartDrinks, setCartDrinks] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  // const [ordersData, setOrdersData] = useState([]);

  // useEffect(() => {
  //   if (user) {
  //     // Everytime ruby needs to know who is logged in,
  //     // we need {credentials: "include"}
  //     fetch("http://localhost:9292/orders", { credentials: "include" })
  //       .then((r) => r.json())
  //       .then((data) => {
  //         setOrdersData(data);
  //       });
  //   }
  // }, []);

  useEffect(() => {
    fetch("http://localhost:9292/me", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("user", data.user);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/drinks")
      .then((r) => r.json())
      .then((data) => {
        setDrinksData(data);
      });
  }, []);
  //check to see if we have a cookie that
  //check the state constantly
  //check the state when state will lose the user

  return (
    <div>
      <Navbar user={user} cartDrinks={cartDrinks} />

      <Link exact to="/">
        <div class="ui center aligned header">
          <Segment>
            <Header as="h2">
              <Image
                style={{ height: "25px", width: "25px", float: "left" }}
                src="https://img.icons8.com/ios-filled/50/000000/coffee.png"
              />
              Welcome to Spill the Beans
            </Header>
          </Segment>
        </div>
      </Link>
      <Aside setDrinksData={setDrinksData} drinksData={drinksData} />

      <Switch>
        <Route exact path="/">
          {drinksData.length === 0 ? null : <MainContainer data={drinksData} />}
        </Route>

        <Route exact path="/login">
          <LogInPage setUser={setUser} user={user} />
        </Route>
        <Route exact path="/logout">
          <Logout setUser={setUser} />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/recent-orders">
          <RecentOrders
            user={user}
      
          />
        </Route>

        <Route exact path="/drinks/:id">
          {drinksData.length === 0 ? null : (
            <ShowDrinks data={drinksData} cartDrinks={cartDrinks} user={user} />
          )}
        </Route>

        <Route exact path="/edit-profile">
            <EditProfile user={user} setUser={setUser}/>
        </Route>

        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
      {user? null: <Redirect to='/login'/>}
    </div>
    
  );
}

export default App;
