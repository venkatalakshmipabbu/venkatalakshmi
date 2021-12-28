import React,{useState} from "react"

import Axios from 'axios';

//import './App.css';

function DelTra(){

    const[vehicleno,setVehicleno]=useState('')

const delTraffic=()=>{

    alert("delecting Record");

    Axios.post("http://localhost:3001/delRec",{vehicleno:vehicleno})

}

return(

    <div><h1 align="center" style={{fontFamily:"serif", fontSize:"30px"}}>Delete vechile Number</h1>

    <table style={{backgroundColor:"aqua",borderRadis:"30",borderWidth:"10px",fontFamily:"serif"}}><tr><th><label>vechile number to delete:</label></th>

    <td><input type="text" onChange={(event)=>{setVehicleno(event.target.value)}}/></td></tr>

   <tr> <button  style={{backgroundColor:"blue",color:"white",height:"25px",borderRadius:"10px" ,marginBottom:"30"}} onClick={delTraffic}>Delete vechile</button></tr></table>

    </div>

);

}

export default DelTra;