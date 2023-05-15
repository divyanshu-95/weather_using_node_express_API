const express=require('express');
const app=express();
const port=process.env.port||8000;
const path=require('path');

//for path
const absolutePath=path.join(__dirname,"../public")
app.use(express.static(absolutePath))

//routes
app.get('/',(req,res)=>{
    res.send('welcome');
});
app.get('/about',(req,res)=>{
    res.send('about');
});
app.get('/weather',(req,res)=>{
    res.send('weather');
});
app.get('*',(req,res)=>{
    res.send('404 err');
});
app.listen(port,()=>{
    console.log('done')
});