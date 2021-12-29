import React from 'react';

import speedlimit from './speedlimit.png';

class Rule4 extends React.Component{

render(){

return(<div><center><font color="green"><h2>Always drive within the speed limit</h2></font></center><br/>

<center><img src={speedlimit} height="200" width="200"></img></center>
<p style={{color:'teal' ,fontFamily:"serif"}}>In a recent meeting with his officials, Union Minister for Road Transport and Highways, 
  Nitin Gadkari, proposed to increase the speed limit of vehicles on expressways (controlled-access highways) by up to 20 kilometres per hour (kmph). 
  This, he stated, was on account of considerable improvements in the quality of India’s highways that allow for faster travel than in the past. 
  The present maximum speed limit for cars on expressways is 120 kmph and on national highways, the maximum speed limit is 100 kmph.

The minister opined that the Indian mindset was not in favour of higher speeds as it held that speed causes accidents. 
The minister, however, reiterated his own belief at the India Today’ Conclave 2021. He said, 
  “My personal view is that the speed limit for vehicles on expressways should be increased to 140 km per hour.” Gadkari added that while the speed limits on national highways should be at least 100 kmph on four-lane roads, the respective speed limit for two-lane roads and city roads should be 80 kmph and 75 kmph.</p>
</div>);

}

}

export default Rule4;
