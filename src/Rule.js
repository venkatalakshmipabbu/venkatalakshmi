import React from 'react';

import Rule1 from './Rule1';

import Rule2 from './Rule2';

import Rule3 from './Rule3';

import Rule4 from './Rule4';

//import ReactDOM from 'react-dom';  

import { BrowserRouter as Router, Route,NavLink} from 'react-router-dom';

function App() {

  return (

 <React.Fragment>

    <Router>

 <h1 align="center" style={{fontFamily:"serif"}}><font color="navy" face="italic"><b>TRAFFIC RULES</b></font></h1>

   <div className="App">

       <NavLink to="/rule1" exact activeStyle={{color:'green',textAlign:"left",fontFamily:"serif"}}>Rule1</NavLink>   
<br/><NavLink to="/rule2" exact activeStyle={{color:'green',fontFamily:"serif"}}>Rule2</NavLink>
 <br/><NavLink to="/rule3" exact activeStyle={{color:'green',fontFamily:"serif"}}>Rule3</NavLink> 
<br/><NavLink to="/rule4" exact activeStyle={{color:'green',fontFamily:"serif"}}>Rule4</NavLink>
       
              
    <Route path="/rule1" component={Rule1} />  
       
              <Route path="/rule2" component={Rule2} />  
       
              <Route path="/rule3" component={Rule3} />
       
              <Route path="/rule4" component={Rule4} />
              </div>

     </Router>  

  </React.Fragment>

  );

}

export default App;