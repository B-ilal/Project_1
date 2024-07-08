const express=require('express');
const router=express.Router();
const path=require('path');


router.get('/adm',(req,res,next)=>{
      res.sendFile(path.join(__dirname,'../','views','Administration.html'));
});
router.post('/exm',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

});

module.exports=router;