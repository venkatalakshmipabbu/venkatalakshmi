import React from 'react';

import About from './About';

import Rule from './Rule';
import listTraffic from "./listTraffic"
import Penality from './Penality';
import trafficadd from './trafficadd';
//import ReactDOM from 'react-dom';  

import { BrowserRouter as Router, Route,NavLink} from 'react-router-dom';

function App() {

  return (

 <React.Fragment>

    <Router>

    <center> <h1><font color="blue" face="italic"><b>TRAFFIC SYSTEM</b></font></h1> </center>

   

   <br/><br/>

   <div className="App" className="image1" style={{fontFamily:"serif"}}>
   
   <center>

        <button>  

           <NavLink to="/about" exact activeStyle={  

             {color:'green'}}>About</NavLink>
             </button>  

<button>  

  <NavLink to="/rule" exact activeStyle={  

    {color:'green'}}>Rule</NavLink> 

</button>

<button>

<NavLink to="/penality" exact activeStyle={  

    {color:'green'}

 }>Penality</NavLink>  

</button>
<button>  

           <NavLink to="/trafficadd" exact activeStyle={  

             {color:'green'}}>Add Penality</NavLink>
             </button>  

             <button>  

<NavLink to="/listTraffic" exact activeStyle={  

  {color:'green'}}>view report</NavLink>
  </button>
  


</center>
<br/>
<marquee><font color="green" face="italic" size="5">Following Traffic Rules is Our Responsibility</font></marquee>

<Route path="/about" component={About} />  

<Route path="/rule" component={Rule} />  

<Route path="/penality" component={Penality} />
<Route path="/trafficadd" component={trafficadd} />
<Route path="/listTraffic" component={listTraffic} />
<br/>

</div>

</Router>  

</React.Fragment>

);

}

export default App;