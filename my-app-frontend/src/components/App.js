import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Aside from "./Aside"
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Aside/>
      <Link to="/">
        <h1 class="ui header" style={{ justifyContent: "center" }}>
          Welcome to Starbucks
        </h1>
      </Link>

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
