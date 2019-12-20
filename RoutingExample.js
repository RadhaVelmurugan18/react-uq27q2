import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

export default function RoutingExample() {
  return(
    <span>
<Router>
  <Link to ="/">Home</Link>
  <Link to ="Contact">Contact Us</Link>
  <Link to ="About">About Us</Link>

<Switch>
<Route exact path="/About">
<About/>
</Route>
<Route exact path="/">
<Home/>
</Route>
<Route exact path="/Contact">
<Contact/>
</Route>
</Switch>
</Router>
</span>
  )

}