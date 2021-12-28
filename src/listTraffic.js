import React from "react";
class ListTraffic extends React.Component {    // Constructor
    constructor(props) {
        super(props);  
        this.state = {    items: [],      DataisLoaded: false    };
    }
    // ComponentDidMount is used to  execute the code
    componentDidMount() {
        fetch("http://localhost:3001/show").then((res) => res.json()).then((json) => {
                this.setState({items: json, DataisLoaded: true });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        return (
        <div className = "App">
            <br/>
            <br/>
            <h1 style={{color:"navy",fontFamily:"serif"}}>Penality Report</h1>
            <table border='1' align='center' style={{backgroundColor:"aqua",fontFamily:"serif",padding:"10px"}}>
                    <tr><th style={{fontFamily:"serif",padding:"10px"}}>id</th><th style={{fontFamily:"serif",padding:"10px"}}>Person Name</th><th style={{fontFamily:"serif",padding:"10px"}}>vehicle number</th><th style={{fontFamily:"serif",padding:"10px"}}>violation</th><th style={{fontFamily:"serif",padding:"10px"}}>Fine</th></tr>
           {
                items.map((item) => (
                         <tr key = { item._id } >
                             <td style={{fontFamily:"serif",padding:"10px"}}>{item._id}</td><td>{item.pname}</td>
                      <td style={{fontFamily:"serif",padding:"10px"}}>{item.vehicleno}</td>
                         <td style={{fontFamily:"serif",padding:"10px"}}>{item.violation}</td>
                         <td style={{fontFamily:"serif",padding:"10px"}}>{item.fine}</td>                  
                  </tr>
                ))        
         }
         </table>
        </div>
    );
}
}  
export default ListTraffic;