const http=require('http');
const express=require('express');
const bodyparser=require('body-parser');
const admrouter=require('./Routers/Administration');
const exmrouter=require('./Routers/Examination');
const app=express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(admrouter);
app.use(exmrouter);











app.listen(3000);





