import React from 'react';

import detail1 from './detail1.jpg';

import detail2 from './detail2.jpg';

import detail3 from './detail3.jpg';

class About extends React.Component{

render(){

return(<div><font color="navy"> <h2 align="center" style={{fontFamily:"serif", fontSize:"30px"}}>Traffic Details</h2></font><br/>

<marquee><img src={detail1} alt="image1" height="300" width="300" align="top"/>

<img src={detail2} alt="image2" height="300" width="300" align="top"/>

<img src={detail3} alt="image3" height="300" width="300" align="top"/></marquee>

<p style={{fontFamily:"serif",padding:"10px"}}><h4>What are the types of traffic signs in India?</h4>
The traffic signs in India are categorized into three major groups, which are Regulatory signs, Warning signs and Informative signs.
Regulatory signs: Most signs under this category come with a round shape. Some of them feature a red border with a black symbol and white background inside while some others can be depicted with a blue circle and white symbol within. These regulatory or mandatory signs indicate rules that should be followed strictly. Otherwise, the driver will be punished and receive a challan for their violation. Not following these signs might affect the traffic flow and caused a serious accident.
Cautionary sign: The signs of this category usually are depicted with the red triangle border with a smaller black graphic inside. These signs give warnings to the road users about the potential danger ahead, for example, turn and curves, lane transition, and pedestrian crossing. Even though there is hardly any regulation or penalty attached to these signs, these signs are very important to your safety. When seeing these warning signs, a driver should pay closer attention and prepare for the situation.
Informatory sign: While the other two types of signs have a particularly important meaning for the safety of the road-users, the third category includes signs that will give you information regarding the destinations, distance, fuel stations and other locations. Observing these signs will help you navigate through the complex traffic system.</p>
</div>);

}

}

export default About;