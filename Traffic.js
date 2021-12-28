const mongoose=require('mongoose')

const TrafficSchema=new mongoose.Schema({
 id:{
    type:String
},
 pname:{
type:String
},
 vehicleno:{
    type:String
},
 violation:{
type:String
},
 fine:{

type:String

    }
})

const Traffic= mongoose.model("Traffic",TrafficSchema)

module.exports=Traffic