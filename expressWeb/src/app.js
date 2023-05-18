const express=require('express');
const app=express();
const port=process.env.port||8000;
const path=require('path');

//for path
const absolutePath=path.join(__dirname,"../public")

app.set('view engine','.hbs');//hbs

app.use(express.static(absolutePath));


//routes
app.get('/',(req,res)=>{
    res.render('index');
    //welcome
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/weather',(req,res)=>{
    res.render('weather');
});
app.get('*',(req,res)=>{
    res.render('404err');
});
app.listen(port,()=>{
    console.log('done')
});