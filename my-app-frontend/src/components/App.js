import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Aside from "./Aside"
import { Link, Route, Switch } from "react-router-dom";
import { Header, Segment } from 'semantic-ui-react'


function App() {
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
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
