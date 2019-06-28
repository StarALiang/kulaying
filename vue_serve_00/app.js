const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
const productRouter = require('./routes/product.js');
const cors = require("cors");

//创建web服务器
var server=express();
server.use(cors({
  origin:'http://127.0.0.1:8080',
  credentials:true
}))
server.listen(3000);
//托管静态资源到public目录下
server.use( express.static('public') );
//使用body-parser中间件
server.use( bodyParser.urlencoded({
  extended:false
}) );
//挂载路由器，挂载到/user，路由访问 /user/reg
server.use( '/user',userRouter );
//商品路由器挂载到/product下
server.use( '/product',productRouter );














