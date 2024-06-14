import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";

function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/Shopping-cart" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
