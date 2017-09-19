//创建自己网站的静态服务器

//1.引入http模块
var http = require('http');
var fs = require('fs');
var path = require('path');
var getType = require('./getType');
//2.创建服务器
http.createServer(function(req,res){

	//过滤特殊目录
	if(req.url=='/favicon.ico'){
		return;
	}
	
	//判断用户请求的是哪一个页面(设置路由信息)
	if(req.url=='/' || req.url=='/index.html' || req.url=='/index'){
		//读取主页所有的信息
		fs.readFile('./index.html',function(err,data){
			//判断err是否有问题
			if(err){
				console.log('读取网页内容失败！程序员小哥正在吐血维护中！');
			}else{
				//1.设置响应头信息
				res.writeHead(200,{'content-type':'text/html;charset=utf-8'});

				//2.设置响应信息
				res.write(data.toString());

				//3.结束响应
				res.end();

			}

		});

	}else if(req.url=='/list' || req.ur=='/list.html'){

		//读取list页的内容
		fs.readFile('./list.html',function(err,data){

			//判断
			if(err){
				console.log('读取列表页页面内容失败！');
			}else{

				//1.设置响应头信息
				res.writeHead(200,{'content-type':'text/html;charset=utf-8'});

				//2.设置响应信息
				res.write(data);

				//3.结束响应
				res.end();

			}

		});

	}else if(req.url=='/buycar' || req.ur=='/buycar.html'){
		fs.readFile('./buycar.html',function(err,data){

			//判断
			if(err){
				console.log('读取购物车页面内容失败！');
			}else{

				//1.设置响应头信息
				res.writeHead(200,{'content-type':'text/html;charset=utf-8'});

				//2.设置响应信息
				res.write(data);

				//3.结束响应
				res.end();

			}

		});
	}else if(req.url=='/register' || req.ur=='/register.html'){
		fs.readFile('./register.html',function(err,data){

			//判断
			if(err){
				console.log('读取注册页面内容失败！');
			}else{

				//1.设置响应头信息
				res.writeHead(200,{'content-type':'text/html;charset=utf-8'});

				//2.设置响应信息
				res.write(data);

				//3.结束响应
				res.end();

			}

		});
	}else if(req.url=='/details' || req.ur=='/details.html'){
		fs.readFile('./details.html',function(err,data){

			//判断
			if(err){
				console.log('读取详情页面内容失败！');
			}else{

				//1.设置响应头信息
				res.writeHead(200,{'content-type':'text/html;charset=utf-8'});

				//2.设置响应信息
				res.write(data);

				//3.结束响应
				res.end();

			}

		});
	}else{
		// req.url ========== /static/css/index.css
		// req.url ========== /static/js/jquery-1.8.2.min.js
		// req.url ========== /static/js/index.js
		fs.readFile('.'+req.url,function(err,data){

			//获取不同文件的后缀名
			var ext = path.extname(req.url);

			//1.设置响应头信息
			res.writeHead(200,{'content-type':getType(ext)+';charset=utf-8'});

			//2.设置相应信息
			res.write(data);

			//3.结束响应
			res.end();

		});

	}

}).listen('8000','127.0.0.1',function(){

	console.log('恭喜你，服务器已经成功的搭建了！么么哒~~~');

});