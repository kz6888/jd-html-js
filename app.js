//1.下载模块框架
//2.引入express框架模块
var express=require('express');

var path=require('path');
// 3.创建应用
var app=express();
// 8.设置静态资源托管目录
app.use(express.static('public'));
//6.创建模板引擎
app.set('view engine','ejs');
//7.设置模板存储位置
app.set('views','views')
// 9.引入路由文件
var user=require('./routers/user');
// 10.所有从user开头的都交给user路由处理
app.use('/user',user);
// 5.设置相应信息
app.get('/:val',function(req,res){
	var rp=req.params.val;
	res.render(rp);
})



// 4.创建监听
app.listen('6060','127.0.0.1',function(){
	console.log('搭建成功');
})