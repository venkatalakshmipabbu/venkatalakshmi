import React, { useState } from "react";

import Axios from 'axios';

import './App.css';

//import App from "./App";


function AddTra(){

    const [pname,setpname]=useState('')
    const [vehicleno,setVehicleno]=useState('')
    const [violation,setViolation]=useState('')
    const [fine,setFine]=useState('')

    const addTraffic=()=>{

        alert("adding")

        Axios.post("http://localhost:3001/insert",{pname:pname,vehicleno:vehicleno,violation:violation,fine:fine})

    }

    return(
        


        <div>
            <h1 align="center" style={{color:"navy",fontFamily:"serif"}}>Add Traffic Record</h1>
          <table  border="1" align="center" style={{backgroundColor:"aqua",borderRadis:"30",borderWidth:"2px",fontFamily:"serif"}}>
              <tr><th>Person name:</th> 
         <td><input type="text" onChange={(event)=>{setpname(event.target.value)}}/></td> </tr><br/>
     <tr> <th><label>Vehicle Number</label></th>
       <td><input onChange={(event)=>{setVehicleno(event.target.value)}}/></td></tr><br/>
      <tr><th><label>violation:</label></th> 
     <td> <select type="text"   onChange={(event)=>{setViolation(event.target.value)}}>
<option>Select the violation</option>

<option> drink and drive</option>

<option>Rash driving</option>

<option>Riding Without Helmet</option>

<option>without licence</option>
<option>Driving Without Insurance</option>

</select></td>
   </tr><br/>
         <tr> <th>   <label>Fine:</label></th> 
    
         <td> <input type="text" onChange={(event)=>{setFine(event.target.value)}}/></td></tr>
    
        <button style={{backgroundColor:"darkslateblue", padding:"2px",color:"white",width:"100px",height:"25px",borderRadius:"10px",margin:"10px", marginLeft:"120" ,fontFamily:"serif"}}   onClick={addTraffic}>Add details</button>
        </table>
    
        </div>
    
        );
    
    }

    
    export default AddTra;