import React from 'react';

import seatbelt from './seatbelt.png';

class Rule2 extends React.Component{

render(){

return(<div><center> <font color="green"><h2>Always wear seat belt</h2></font></center><br/>

<center><img src={seatbelt} height="200" width="200"></img></center>
<p style={{fontFamily:"serif"}} >The West Delhi Traffic Police conducted a drive last week to ensure that rear passengers wear seatbelts in cars. 
As part of this drive, the traffic police issued challans of up to 1,000 for not wearing rear seat belt.
This drive was effectively an awareness campaign between 13 January and 23 January and was aimed at apprising people that they are mandated by the law to buckle up their seat belt even when they are in the rear seat. 
As a matter of fact, Section 138 (3) of the Central Motor Vehicles Rules makes it compulsory for rear passengers to wear a seat belt.
However, the lack of awareness and enforcement has led to a majority of rear occupants giving seatbelts a miss. 
And then there is a common misbelief among people that rear passengers are better off than the front occupants in case of an accident.
However, crash tests have proved it that wearing a rear seatbelt is as important as buckling up when in the front seat. </p>
</div>);

}

}

export default Rule2;
