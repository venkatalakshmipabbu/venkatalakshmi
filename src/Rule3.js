import React from 'react';

import redsignal from './redsignal.jpg';

class Rule3 extends React.Component{

render(){

return(<div><center><font color="green"><h2>Never Cross Red Signal</h2></font></center><br/>

<center><img src={redsignal} height="200" width="200"></img></center>
  <p style={{fontFamily:"serif",color:'teal'}}>Red is generally the sign of danger or warning and on traffic lights, it signals potential hazard ahead and hence, is an indicator for the motorists to stop. Also, you can turn left in a red signal only if there is a sign to do so. Also,
    when doing so, you need to give the right of way to pedestrians and vehicles that would be coming from opposite directions.</p>

</div>);

}

}

export default Rule3
