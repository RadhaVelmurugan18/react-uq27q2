import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from "react-router-dom";
export default function Home() {
 return (
<div>
<Router>
<Link to='dress'>Dress</Link>
<Link to='accessories'>Accessories</Link>

<switch>
    <Route exact path='/dress'>
    <dress/>
    </Route>     
    <Route exact path='/accessories'>
    <accessories/>
    </Route>
    <Route path="/:id" children ={<Child/>}>
    </Route>
    </switch>
</Router>
</div>
 )
}

function dress (){
  return(
    <div>
    <h2>Thanks for choosing apple </h2>
    <ol>
    <li>Apple Phones come with a minimum price of 40,000</li>
    <li>Apple Phone has various models
    </li>
    </ol>
    </div>
  )
}
function accessories (){
  return(
    <div>
    <h2>Thanks for choosing OnePlus </h2>
    <ol>
    <li>One Plus is the top leading phone in Android OS</li>
    <li>One Plus comes with wide angle shot camera
    </li>
    </ol>
    </div>
  )
}
function Child (){
  let {id} = useParams();
  return(
<div>
<h3>You Choosed: {id}</h3>
</div>
  )
}