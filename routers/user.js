var express=require('express');

var router=express.Router();

router.get('/info',function(req,res){
	res.send('这是修改页面');
});

module.exports=router;