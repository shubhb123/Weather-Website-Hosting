const express = require('express');
const app = express();
 //process.env.PORT || 
 const port= 3000;
const path = require('path');

Staticpath = path.join(__dirname,"../public");


app.set("view engine","hbs");
app.use(express.static(Staticpath));

app.get("",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.send('404 error page');
});
app.listen(port,()=>{
    console.log("listening to server");
});