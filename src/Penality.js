import React from 'react';
//import DelTra from "./deltraffic";
//import AddTra from "./trafficadd";
//import UpdTra from "./updaterecord";
//import ListTraffic from "./listTraffic";

import {Route,table} from 'react-router-dom'

class Penality extends React.Component{

constructor(props)

{

super(props)

this.state={fine:'',name1:'',address:'',violation:''}

this.handleChange=this.handleChange.bind(this);

this.handleSubmit=this.handleSubmit.bind(this);

}

handleChange(event)

{

this.setState({[event.target.name]:event.target.value});

}

handleSubmit(event)

{

    if(this.state.violation==="never drink and drive"){

        alert("Penality is made because you are drinking & driving");

        alert("5000");

        this.state.fine="5000";
    }

    else if(this.state.violation==="always wear seat belt"){

        alert("Penality is made because you are not wearing seat belt while driving");

        alert("3000");

        this.state.fine="3000";

         

    }

    else if(this.state.violation==="never break red signal"){

        alert("Penality is made because you crossed during red signal is ON while driving");

        alert("2000");

        this.state.fine="2000";

    }

    else{

        alert("Penality is made because your speed is outoff limit while driving");

        alert("1000");

        this.state.fine="1000";

         

    }
}

render()

{

return(

    <React.Fragment><br/>

    <center> <h1 style={{color:"navy"}}>Penality</h1></center>
    <table border="1" align="center" style={{backgroundColor:"aqua",fontFamily:"serif"}}>

<tr><td>Name of the Person:</td><td><input type="text" name="name1" value={this.state.name1} onChange={this.handleChange}/></td></tr><br/>

<tr><td>Address:</td><td> <input type="text" name="address" value={this.state.address} onChange={this.handleChange}/></td></tr><br/>

<tr><td>Violation: </td><td><select type="text" name="violation" value={this.state.violation} onChange={this.handleChange}>
<option>Select the violation</option>

<option>never drink and drive</option>

<option>always wear seat belt</option>

<option>never break red signal</option>

<option>always be within the speed limit</option>

</select></td></tr><br/>

<tr><td>Fine: </td><td><input type="text" name="fine" id="f1" value={this.state.fine} onChange={this.handleChange}/></td></tr><br/>

  <input  style={{color:"blue",backgroundColor:"blue"}} type="submit" value="submit" onClick={this.handleSubmit} style={{marginLeft:"200px"}}/>  

</table>
</React.Fragment>

);

}

}

export default Penality;
