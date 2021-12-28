const express =require('express')

const mongoose=require('mongoose')

const cors= require('cors')

const app=express()

const TrafficModel=require('./models/Traffic')

mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser:true} )

app.use(express.json())

app.use(cors())

app.listen(3001,()=>{console.log('connect to http://localhost:3001/')})

app.post("/insert",async(req,res)=>{

   // const id=req.body.empid

    const pname=req.body.pname

    const vehicleno=req.body.vehicleno
    const violation=req.body.violation

     const fine=req.body.fine

     console.log(req.body.pname)

     console.log(req.body.vehicleno)
     console.log(req.body.violation)

     console.log(req.body.fine)

     //console.log(req.body.address)

     const tra=new TrafficModel({pname:pname,vehicleno:vehicleno,violation:violation,fine:fine})

     try{
 
          await tra.save()
 
          res.send("record inserted")
 
          console.log('record inserted')
 
     }
 
     catch(err){
 
         console.log(err)
 
     }
 
 })
 app.get("/show", async(req,res)=>{

    TrafficModel.find({},(err,result)=>{

        if(err){

            res.send("Record failed to Load")

        }

        res.send(result)

        console.log(result)

    })

})
/*app.post('/delRec', async (req,res)=>{
    var myquery = { name: req.body.empname};
    console.log(req.body.empname)
   await EmployeeModel.deleteOne(myquery).then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
});*/
app.post('/delRec', async (req,res)=>{

    var myquery = {vehicleno: req.body.vehicleno};

    console.log(req.body.vehicleno)

   await TrafficModel.deleteOne(myquery).then(function(){

        console.log("Data deleted"); // Success

    }).catch(function(error){

        console.log(error); // Failure

    });

});
app.post("/update",async(req,res)=>{
    const pname=req.body.pname
    const vehicleno=req.body.vehicleno
   
   const tra=new TrafficModel({pname:pname,vehicleno:vehicleno})
   try{
        await TrafficModel.findOneAndUpdate({pname:req.body.pname},{"$set": {pname:req.body.pname,vehicleno:req.body.vehicleno}},{new:true})
        res.send("record updated")
        console.log("Record found updated")
   }
   catch(err){
       console.log(err)
   }
})
app.get("/show", async(req,res)=>{
   TrafficModel.find({},(err,result)=>{
        if(err){
            res.send("Record failed to Load")
        }
        res.send(result)
        console.log(result)
    })
})