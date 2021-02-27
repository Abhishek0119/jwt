require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
//start express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const Posts = [
    {
        username:'Abhishek Topno',
        title:'This is the first title'
    },
    {
        username:'Sanjay Singh',
        title:'This is the second title'
    }
]
app.get('/',(req,res)=>{
    res.send('This is the home page');
})
app.post('/login',(req,res)=>{
    const username=req.body.username;
    const user = {name:username};

   const accessToken= jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken:accessToken});
})
app.get('/post',(req,res)=>{
      res.json(Posts);
})

app.listen(process.env.PORT,()=>{
    console.log("app is listening on the port 3000");
})