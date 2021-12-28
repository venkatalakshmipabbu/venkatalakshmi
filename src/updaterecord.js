import React,{ useState } from "react";

import Axios from 'axios';

import './App.css';

function UpdTra(){

    const [pname,setName]=useState('')

    const [vehicleno,setVehicleno]=useState('')

    const updTraffic=()=>{

      alert("updating")

      Axios.post("http://localhost:3001/update",{pname:pname,vehicleno:vehicleno})

    }
    return(

   

        <div><h1 style={{color:"aqua",fontFamily:"serif"}}>Update  vehicle details Record</h1>
    
        <table style={{backgroundColor:"lightpink",borderRadis:"30",borderWidth:"10px",fontFamily:"serif"}}><tr><th><label>Person name:</label></th>
    
        <td><input type="text"  onChange={(event)=>{setName(event.target.value)}} /></td></tr>
    
        <tr><th> <label>vehicle Number</label></th>
    
        <td> <input  onChange={(event)=>{setVehicleno(event.target.value)}} /></td></tr>
    
        <button style={{backgroundColor:"blue",color:"white",height:"25px",borderRadius:"10px",fontFamily:"serif"}} onClick={updTraffic}>Update vehicle </button></table>
    
        </div>
    
        );
    
       
    
        }
        export default UpdTra;