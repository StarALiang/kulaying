SET NAMES UTF8;
DROP DATABASE IF EXISTS aby;
CREATE DATABASE aby CHARSET=UTF8;
USE aby;


/**笔记本电脑型号家族**/
CREATE TABLE aby_laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);

/**房间数据**/
CREATE TABLE aby_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,                  #所属地区编号
  title VARCHAR(128),             #房型
  subtitle VARCHAR(128),          #地理位置
  price DECIMAL(10,2),            #价格
  promise VARCHAR(64),            #服务承诺
  room_appraise VARCHAR(64),      #房间评价
  landlord_appraise VARCHAR(64),  #房东评价
  room_facility VARCHAR(64),      #房间设施特色
	seller_img VARCHAR(128),				#卖家头像
  shelf_time BIGINT,              #发布时间
  sold_count INT,                 #已售出的数量
  is_onsale BOOLEAN               #是否促销中
);
INSERT INTO aby_laptop VALUES
(null,1,'独立房间 · 1室1卫1床','B1 Design Studio: 设计师自住SOHO,临近西溪湿地,地铁5号线,阿里巴巴,浙江大学',168,'满7天立减5%','4.9分 · 170条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/user/f2b39b21-4327-4b01-95b6-c01a24c20dab.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'整套公寓 · 1室1卫2床','【西子森林】国庆活动可定！全新!市中心!西湖文化广场边/近地铁/北欧风/设计师的家',158,'满7天立减15%','4.9分 · 102条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/user/b394b94c-bc56-4de8-8883-7a0be847e4e5.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','西湖边的别墅5#房-“浙江最美民宿”第一名如果小院',188,'夏季特惠8.5折','4.8分 · 217条评论','超赞房东','自助入住','https://z1.muscache.cn/im/pictures/user/21afe19e-44dd-4aba-9727-1c36732c070a.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','时光杂货铺 设计师自住 市中心 离西湖不远',144,'满7天立减5%','4.9分 · 379条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/5c49b1cc-ba20-44d2-903c-fd89f0a0aef9.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','时光杂货铺 设计师自住 市中心 离西湖不远',144,'满7天立减5%','4.9分 · 379条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/user/48c7a8da-b35a-49d8-b3b8-623f10f5ab1d.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','时光杂货铺 设计师自住 市中心 离西湖不远',144,'满7天立减5%','4.9分 · 379条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/user/9afa5207-e765-488c-ba65-2b1769ba8383.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','B1 Design Studio: 设计师自住SOHO,临近西溪湿地,地铁5号线,阿里巴巴,浙江大学',168,'满7天立减5%','4.9分 · 170条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/user/f2b39b21-4327-4b01-95b6-c01a24c20dab.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','西湖边的别墅5#房-“浙江最美民宿”第一名如果小院',188,'夏季特惠8.5折','4.8分 · 217条评论','超赞房东','自助入住','https://z1.muscache.cn/im/pictures/user/f2b39b21-4327-4b01-95b6-c01a24c20dab.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'整套公寓 · 1室1卫2床','【西子森林】国庆活动可定！全新!市中心!西湖文化广场边/近地铁/北欧风/设计师的家',158,'满7天立减15%','4.9分 · 102条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/user/b394b94c-bc56-4de8-8883-7a0be847e4e5.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','时光杂货铺 设计师自住 市中心 离西湖不远',144,'满7天立减5%','4.9分 · 379条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/5c49b1cc-ba20-44d2-903c-fd89f0a0aef9.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','时光杂货铺 设计师自住 市中心 离西湖不远',144,'满7天立减5%','4.9分 · 379条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/user/48c7a8da-b35a-49d8-b3b8-623f10f5ab1d.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','西湖边的别墅5#房-“浙江最美民宿”第一名如果小院',188,'夏季特惠8.5折','4.8分 · 217条评论','超赞房东','自助入住','https://z1.muscache.cn/im/pictures/user/21afe19e-44dd-4aba-9727-1c36732c070a.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','时光杂货铺 设计师自住 市中心 离西湖不远',144,'满7天立减5%','4.9分 · 379条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/5c49b1cc-ba20-44d2-903c-fd89f0a0aef9.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','时光杂货铺 设计师自住 市中心 离西湖不远',144,'满7天立减5%','4.9分 · 379条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/5c49b1cc-ba20-44d2-903c-fd89f0a0aef9.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','时光杂货铺 设计师自住 市中心 离西湖不远',144,'满7天立减5%','4.9分 · 379条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/5c49b1cc-ba20-44d2-903c-fd89f0a0aef9.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','B1 Design Studio: 设计师自住SOHO,临近西溪湿地,地铁5号线,阿里巴巴,浙江大学',168,'满7天立减5%','4.9分 · 170条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/user/f2b39b21-4327-4b01-95b6-c01a24c20dab.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'整套公寓 · 1室1卫2床','【西子森林】国庆活动可定！全新!市中心!西湖文化广场边/近地铁/北欧风/设计师的家',158,'满7天立减15%','4.9分 · 102条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/user/b394b94c-bc56-4de8-8883-7a0be847e4e5.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','西湖边的别墅5#房-“浙江最美民宿”第一名如果小院',188,'夏季特惠8.5折','4.8分 · 217条评论','超赞房东','自助入住','https://z1.muscache.cn/im/pictures/user/f2b39b21-4327-4b01-95b6-c01a24c20dab.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','时光杂货铺 设计师自住 市中心 离西湖不远',144,'满7天立减5%','4.9分 · 379条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/5c49b1cc-ba20-44d2-903c-fd89f0a0aef9.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','时光杂货铺 设计师自住 市中心 离西湖不远',144,'满7天立减5%','4.9分 · 379条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/5c49b1cc-ba20-44d2-903c-fd89f0a0aef9.jpg?aki_policy=profile_x_medium',1561125196769,0,true),
(null,1,'独立房间 · 1室1卫1床','时光杂货铺 设计师自住 市中心 离西湖不远',144,'满7天立减5%','4.9分 · 379条评论','超赞房东','可以做饭','https://z1.muscache.cn/im/pictures/5c49b1cc-ba20-44d2-903c-fd89f0a0aef9.jpg?aki_policy=profile_x_medium',1561125196769,0,true);

/**笔记本电脑图片**/
CREATE TABLE aby_laptop_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  laptop_id INT,              #笔记本电脑编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);

/**用户信息**/
CREATE TABLE aby_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);


/*******************/
/******数据导入******/
/*******************/
/**笔记本电脑型号家族**/
INSERT INTO aby_laptop_family VALUES
(NULL,'AppleMacBookAir'),
(NULL,'小米Air'),
(NULL,'ThinkPadE480C'),
(NULL,'华硕RX310UQ'),
(NULL,'联想小新700'),
(NULL,'戴尔燃7000'),
(NULL,'戴尔灵越15PR-5745B'),
(NULL,'ThinkPadE470 C'),
(NULL,'华硕FH5900V'),
(NULL,'神舟战神Z7M-KP7GT');


/**笔记本电脑图片**/
INSERT INTO aby_laptop_pic VALUES
(NULL, 1, 'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg');

/**用户信息**/
INSERT INTO aby_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');

