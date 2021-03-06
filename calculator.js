const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("server host att 3000.");
});


app.get("/",function(req,res){
    res.sendFile(__dirname +"/calculator.html");
});

app.post("/",function(req,res){
    let num1=Number(req.body.num1);
    let num2=Number(req.body.num2);
    let result=num1 + num2;
    res.send("The result is: "+result);
});

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
    let weight=Number(req.body.weight);
    let height=Number(req.body.height);

    let result=weight/(height*height);
    res.send("Your BMI is "+result);
})