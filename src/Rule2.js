import React from 'react';

import seatbelt from './seatbelt.png';

class Rule2 extends React.Component{

render(){

return(<div><center> <font color="green"><h2>Always wear seat belt</h2></font></center><br/>

<center><img src={seatbelt} height="200" width="200"></img></center>

</div>);

}

}

export default Rule2;