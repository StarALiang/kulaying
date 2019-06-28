import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    list:{
      banner:[
        {img:"38a58da4-a4ed-4e69-8a42-c68fae3ce78d.jpg",txt1:"入住东非特色房源",txt2:"在草原上感受生命的自由"},
        {img:"5d9961da-2521-421a-a4d0-b0aaa8fbdd5e.jpg",txt1:"用旅行为青春定格",txt2:"领取礼券畅玩盛夏"},
        {img:"477be16d-cf17-49ca-9c6c-5468da7aa63d.jpg",txt1:"阳台上看花火绚烂",txt2:"沁凉日本夏日祭"}
      ],
      city:[
        {
          city:"杭州",
          id:"hangzhou",
          housingSource:"26000+房源",
          content:[
            {img:"638f49f0-4247-4d0e-a159-02e718f8cd8a.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"【特价】出门便是西湖| 五星级酒店同楼| 楼下便是美食城;夜市;电影院| 地铁1号线直达| 电梯房",price:"￥292",subprice:"￥324",expNum:"92"},
            {img:"41f10523-d0e0-4daf-b263-1883576e4f1f.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"未拟foru【可期】简约温馨大空间 一号线彭埠站步行五分钟 距火车东一站 地铁可直达西湖等各景区商区",price:"￥223",subprice:"￥248",expNum:"3"},
            {img:"d74fd4f1-b834-49dc-84ae-9948aaca43b8.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"北欧温馨时尚居所,全屋智能设备炫彩夜景灯光,窗外直面杭城地标,近武林门,杭州大厦,西湖,地铁450米",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"04752061-a77c-44c9-8286-64c71cd763f1.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"【西湖•玉兰】步行至西湖,临南宋御街､湖濱商圈､河坊街,景区小巷",price:"￥292",subprice:"￥228",expNum:"66"},
            {img:"de355d5b-6712-4f14-bc7e-b6d9c1f9b492.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"【 Universe & U 】城区地标 地铁口 火车站5分钟 黑胶➕投影➕拍立得由你用 高级公寓",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"6effa5fb-91dd-492e-90db-3aca52d17b3c.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"Real潮宿-現代風と日本式大床房",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"63fa0d10-5f7c-40d8-9e46-2aa7bdd6f40d.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"【Nature & U】林隐于市 180°观景 投影✚拍立得✚Marshall 火车站5分钟 地铁口",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"939e950d-3ae7-438b-8e20-743822f42b25.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"0【寻宿·复式2】 Loft轻奢 Mini别墅  地中海风 姑苏地标 拙政园 平江路 火车站新品公寓",price:"￥292",subprice:"￥228",expNum:"66"}
          ]
        },
        {
          city:"上海",
          id:"shanghai",
          housingSource:"33000+房源",
          content:[
            {img:"ccc74a39-b69a-4d8b-add4-34c32ad7c90f.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"【滋味家】成都最美夜景/近春熙路电视塔/临河高层观景/地铁口套一整租",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"3ac21256-86c9-4629-aee9-ff47afec95a7.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"【果酱】特惠房!春熙路太古里商圈/北欧家庭影院房/地铁三号线/购物美食商圈市中心/IFS国际金融中心",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"d08905d8-d94d-45db-80fe-06076c1118cc.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"【一眠民宿】No.911 | 双流机场 | Loft绿野仙踪 | 免费接或送机一次",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"0ee45845-bfaa-4bec-a328-934782ee8a71.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"春熙路太古里王府井+现代风之黑白极简风+一居室(两人)",price:"￥292",subprice:"￥228",expNum:"66"},
            {img:"638f49f0-4247-4d0e-a159-02e718f8cd8a.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"【特价】出门便是西湖| 五星级酒店同楼| 楼下便是美食城;夜市;电影院| 地铁1号线直达| 电梯房",price:"￥292",subprice:"￥324",expNum:"92"},
            {img:"41f10523-d0e0-4daf-b263-1883576e4f1f.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"未拟foru【可期】简约温馨大空间 一号线彭埠站步行五分钟 距火车东一站 地铁可直达西湖等各景区商区",price:"￥223",subprice:"￥248",expNum:"3"},
            {img:"d74fd4f1-b834-49dc-84ae-9948aaca43b8.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"北欧温馨时尚居所,全屋智能设备炫彩夜景灯光,窗外直面杭城地标,近武林门,杭州大厦,西湖,地铁450米",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"04752061-a77c-44c9-8286-64c71cd763f1.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"【西湖•玉兰】步行至西湖,临南宋御街､湖濱商圈､河坊街,景区小巷",price:"￥292",subprice:"￥228",expNum:"66"}
          ]
        },
        {
          city:"南京",
          id:"nanjing",
          housingSource:"22000+房源",
          content:[
            {img:"558d2f32-a6a4-4c6d-bd50-c131efd7ec2f.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"英伦风情 & max投影  高层夜景 新街口商圈 地铁口",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"c9bba525-dfef-44b4-878a-86c0f54a8ff1.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"度小夜-工业1980 美式复古风/市中心地铁口/新街口",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"22595657-0a3b-4969-bc28-ddc670df9ece.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"金陵8号！免费停车。双床大套房！出门就是夫子庙和老门东！高铁站，中山陵，总统府。1和3号地铁！公交站",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"2b0992d9-a7d7-490f-9b81-722e5e8ade74.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"Tonyの家NO.3 市中心新街口·夫子庙·露天院子",price:"￥292",subprice:"￥228",expNum:"66"},
            {img:"ccc74a39-b69a-4d8b-add4-34c32ad7c90f.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"【滋味家】成都最美夜景/近春熙路电视塔/临河高层观景/地铁口套一整租",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"3ac21256-86c9-4629-aee9-ff47afec95a7.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"【果酱】特惠房!春熙路太古里商圈/北欧家庭影院房/地铁三号线/购物美食商圈市中心/IFS国际金融中心",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"d08905d8-d94d-45db-80fe-06076c1118cc.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"【一眠民宿】No.911 | 双流机场 | Loft绿野仙踪 | 免费接或送机一次",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"0ee45845-bfaa-4bec-a328-934782ee8a71.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"春熙路太古里王府井+现代风之黑白极简风+一居室(两人)",price:"￥292",subprice:"￥228",expNum:"66"}
          ]
        },
        {
          city:"重庆",
          id:"chonqing",
          housingSource:"20000+房源",
          content:[
            {img:"308925f2-d166-4b71-ba6f-411d16b06bda.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"临解放碑步行街、洪崖洞、大礼堂、地铁口江景房~江夜渝宿期待你的入住！",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"cd8d391e-87e2-43e1-a003-4cf81859633b.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"米造民宿XR-514 蒲公英的约定/解放碑核心区/楼下美食街街/步行洪崖洞跨江索道/较场口地铁站",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"967cc795-8600-4bbf-abde-1181c5374660.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"【九街招待所】重庆/解放碑/洪崖洞轻轨十分钟/江北/九街 /观音桥商圈附近/网红重庆",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"efcdfed1-ba1a-4f45-bc3c-f83eeed37518.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"米造民宿ML-2805 刚好遇见你/解放碑核心区/楼下石灰市美食街/步行可达洪崖洞",price:"￥292",subprice:"￥228",expNum:"66"},
            {img:"558d2f32-a6a4-4c6d-bd50-c131efd7ec2f.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"英伦风情 & max投影  高层夜景 新街口商圈 地铁口",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"c9bba525-dfef-44b4-878a-86c0f54a8ff1.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"度小夜-工业1980 美式复古风/市中心地铁口/新街口",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"22595657-0a3b-4969-bc28-ddc670df9ece.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"金陵8号！免费停车。双床大套房！出门就是夫子庙和老门东！高铁站，中山陵，总统府。1和3号地铁！公交站",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"2b0992d9-a7d7-490f-9b81-722e5e8ade74.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"Tonyの家NO.3 市中心新街口·夫子庙·露天院子",price:"￥292",subprice:"￥228",expNum:"66"}
          ]
        },
        {
          city:"北京",
          id:"beijing",
          housingSource:"28000+房源",
          content:[
            {img:"ac86b6ba-b623-47df-8691-875d021ec6b1.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"【青柠】城市中的温馨绿洲，近雍和宫/鸟巢水立方/中日医院/5号线和平西桥/10号线惠新西街南口",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"a623049b-184e-4c70-b77c-1aebe1d7c5a3.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"守望空间|近西单 故宫 天安门 前门/2号线与4号线交叉站精致一居",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"b9a5feae-b7ce-4aee-b4bb-7416bd7a8521.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"Stey「胡同里的设计酒店Studio」步行可达故宫&王府井&天安门",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"218c4c33-c08e-42af-b879-2770e303bec4.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"【路客】『暑期特惠』中式休闲都市生活丨天安门丨王府井丨天坛丨崇文门丨同仁堂丨SOHO丨国瑞城",price:"￥292",subprice:"￥228",expNum:"66"},
            {img:"308925f2-d166-4b71-ba6f-411d16b06bda.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"临解放碑步行街、洪崖洞、大礼堂、地铁口江景房~江夜渝宿期待你的入住！",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"cd8d391e-87e2-43e1-a003-4cf81859633b.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"米造民宿XR-514 蒲公英的约定/解放碑核心区/楼下美食街街/步行洪崖洞跨江索道/较场口地铁站",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"967cc795-8600-4bbf-abde-1181c5374660.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"【九街招待所】重庆/解放碑/洪崖洞轻轨十分钟/江北/九街 /观音桥商圈附近/网红重庆",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"efcdfed1-ba1a-4f45-bc3c-f83eeed37518.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"米造民宿ML-2805 刚好遇见你/解放碑核心区/楼下石灰市美食街/步行可达洪崖洞",price:"￥292",subprice:"￥228",expNum:"66"}
          ]
        },
        {
          city:"厦门",
          id:"xiamen",
          housingSource:"8000+房源",
          content:[
            {img:"76d533df-c31f-4c7f-a053-88b0ab0f92be.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"曾厝垵 厦门大学 中山路 鼓浪屿观景豪华浴缸房",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"aad22d13-af0e-4b32-ba1b-8bb4a8614f37.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"厦门曾厝安 鼓浪屿 厦门大学 民宿 阳光轻奢大床",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"89ee179b-35ea-485d-b7a2-7087b07fa5d2.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"【岛町】ROOM4茶 日式简约风 市中心景点超方便！火车站地铁口直达中山路，厦大，鼓浪屿码头",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"218c4c33-c08e-42af-b879-2770e303bec4.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"厦门曾厝垵西里屿沐民宿（厦大店）逸简1.8米飘窗大床房临近曾厝垵厦大南普陀鼓浪屿植物园环岛路厦大白城",price:"￥292",subprice:"￥228",expNum:"66"},
            {img:"ac86b6ba-b623-47df-8691-875d021ec6b1.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"【青柠】城市中的温馨绿洲，近雍和宫/鸟巢水立方/中日医院/5号线和平西桥/10号线惠新西街南口",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"a623049b-184e-4c70-b77c-1aebe1d7c5a3.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"守望空间|近西单 故宫 天安门 前门/2号线与4号线交叉站精致一居",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"b9a5feae-b7ce-4aee-b4bb-7416bd7a8521.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"Stey「胡同里的设计酒店Studio」步行可达故宫&王府井&天安门",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"218c4c33-c08e-42af-b879-2770e303bec4.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"【路客】『暑期特惠』中式休闲都市生活丨天安门丨王府井丨天坛丨崇文门丨同仁堂丨SOHO丨国瑞城",price:"￥292",subprice:"￥228",expNum:"66"}
          ]
        },
        {
          city:"成都",
          id:"chengdu",
          housingSource:"800+房源",
          content:[
            {img:"61e59501-2c79-4b66-9597-a30deb27f084.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"柏悦物语22品质轻奢loft 东郊记忆 理工大学 电子科大 成都东站 地铁口 春熙路 太古里 建设路",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"1edd64a4-25d3-42ad-bd13-c476c8e872f2.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"不远成都/市中心写真浴缸榻榻米少女心大床房春熙路双地铁美食街大投影太古里",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"5a782c75-8e7b-4555-8305-c84612c646b5.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"【松果儿】东客站 | 春熙路 | 天府广场 | 伊藤 | 绿地468 | 阳光大床房",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"3730d9eb-6001-4864-93c9-eca43bb99591.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"限免清洁费！『島』夜景房，春熙路太古里商圈/距离地铁口300米/建设路商圈",price:"￥292",subprice:"￥228",expNum:"66"},
            {img:"76d533df-c31f-4c7f-a053-88b0ab0f92be.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"曾厝垵 厦门大学 中山路 鼓浪屿观景豪华浴缸房",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"aad22d13-af0e-4b32-ba1b-8bb4a8614f37.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"厦门曾厝安 鼓浪屿 厦门大学 民宿 阳光轻奢大床",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"89ee179b-35ea-485d-b7a2-7087b07fa5d2.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"【岛町】ROOM4茶 日式简约风 市中心景点超方便！火车站地铁口直达中山路，厦大，鼓浪屿码头",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"218c4c33-c08e-42af-b879-2770e303bec4.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"厦门曾厝垵西里屿沐民宿（厦大店）逸简1.8米飘窗大床房临近曾厝垵厦大南普陀鼓浪屿植物园环岛路厦大白城",price:"￥292",subprice:"￥228",expNum:"66"},
            {img:"ac86b6ba-b623-47df-8691-875d021ec6b1.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"【青柠】城市中的温馨绿洲，近雍和宫/鸟巢水立方/中日医院/5号线和平西桥/10号线惠新西街南口",price:"￥202",subprice:"￥238",expNum:"92"}
          ]
        },
        {
          city:"苏州",
          id:"suzhou",
          housingSource:"10000+房源",
          content:[
            {img:"de355d5b-6712-4f14-bc7e-b6d9c1f9b492.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"【 Universe & U 】城区地标 地铁口 火车站5分钟 黑胶➕投影➕拍立得由你用 高级公寓",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"6effa5fb-91dd-492e-90db-3aca52d17b3c.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"Real潮宿-現代風と日本式大床房",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"63fa0d10-5f7c-40d8-9e46-2aa7bdd6f40d.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"【Nature & U】林隐于市 180°观景 投影✚拍立得✚Marshall 火车站5分钟 地铁口",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"939e950d-3ae7-438b-8e20-743822f42b25.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"0【寻宿·复式2】 Loft轻奢 Mini别墅  地中海风 姑苏地标 拙政园 平江路 火车站新品公寓",price:"￥292",subprice:"￥228",expNum:"66"},
            {img:"61e59501-2c79-4b66-9597-a30deb27f084.jpg",title:"整套公寓 · 1室1.5卫1床",subtitle:"柏悦物语22品质轻奢loft 东郊记忆 理工大学 电子科大 成都东站 地铁口 春熙路 太古里 建设路",price:"￥202",subprice:"￥238",expNum:"92"},
            {img:"1edd64a4-25d3-42ad-bd13-c476c8e872f2.jpg",title:"整套普通公寓 · 1室1卫1床",subtitle:"不远成都/市中心写真浴缸榻榻米少女心大床房春熙路双地铁美食街大投影太古里",price:"￥202",subprice:"￥248",expNum:"3"},
            {img:"5a782c75-8e7b-4555-8305-c84612c646b5.jpg",title:"整套公寓 · 1室1卫2床",subtitle:"【松果儿】东客站 | 春熙路 | 天府广场 | 伊藤 | 绿地468 | 阳光大床房",price:"￥292",subprice:"￥228",expNum:"92"},
            {img:"3730d9eb-6001-4864-93c9-eca43bb99591.jpg",title:"整栋平房 · 1室1卫1床",subtitle:"限免清洁费！『島』夜景房，春熙路太古里商圈/距离地铁口300米/建设路商圈",price:"￥292",subprice:"￥228",expNum:"66"}
          ]
        }
      ],
      world:[
        {img:"d2f4922f-f805-47d3-8d7a-4c350f1e5625.jpg",title:"整栋木屋 · 1室1卫3床",subtitle:"The Pondhouse - A Magical Place",price:"￥1558",expNum:"215"},
        {img:"b04eddeb_original.jpg",title:"整间LOFT · 1卫2床",subtitle:"Loft Studio in the Central Area",price:"￥312",expNum:"391"},
        {img:"93bb5931_original.jpg",title:"整间LOFT · 1室1卫2床",subtitle:"Radiant Apartment with Terrace in Roma Norte (1/4)",price:"￥547",expNum:"358"},
        {img:"cf0ae91b_original.jpg",title:"整间LOFT · 2室1卫3床",subtitle:"Amazing and Extremely Central Flat",price:"￥258",expNum:"589"}
      ],
      tour:[
        {img:"27fd1aef-8fb6-48f9-afea-1e666071e991.jpg",txt:"文青看了会疯，毗邻798艺术区的藏书阁民宿",praise:"6",discuss:"0",city:"北京"},
        {img:"327721e9-e325-4509-a176-8cd60d1e9e11.jpg",txt:"在重庆的半山腰发现了陶渊明式的“桃花源记”",praise:"58",discuss:"3",city:"重庆"},
        {img:"39b48eaf-3b5a-4b04-be1d-6012ac23a9fd.jpg",txt:"清迈民宿 | 人均300入住超豪华古风小众山屋",praise:"6",discuss:"5",city:"清迈"},
        {img:"ed07ac15-ea02-4b73-8ada-9e511618f9dd.jpg",txt:"为了体验地道的爱尔兰乡村风情，我竟然住进城堡马厩！",praise:"13",discuss:"0",city:"威克斯福德"},
      ],
      expreience:[
        {img:"cd136657-439c-4ea8-a390-df4965b33848.jpg",title:"工作坊 · 清迈",subtitle:"泰国传统具纹身",price:'每人￥571',num:"4.99",expNum:"166"},
        {img:"73d81f12-c386-4c73-a1f0-d25049f88f16.jpg",title:"一日游 · 里斯本",subtitle:"辛特拉难忘一日！",price:'每人￥496',num:"4.93",expNum:"836"},
        {img:"0a4e8b9f-a2da-49b8-b6db-1aa6c95e0e4d.jpg",title:"舞蹈派对 · 曼谷",subtitle:"曼谷难忘之夜！！！",price:'每人￥305',num:"4.93",expNum:"212"},
        {img:"bb32a6b1-0e30-4a15-82b2-686338c87cb6.jpg",title:"摄影 · 东京",subtitle:"您的私人东京摄影师！",price:'每人￥625',num:"4.95",expNum:"441"}
      ]
    }
  },
  // 获取list'
  /* 
  */
  getters:{
    banner(state){
      return state.list.banner;
    },
    city(state){
      return state.list.city;
    },
    detail(state){
      if(state.list.lid == 1){
        return 2
      }else if(state.list.lid == 2){
        return 5
      }else{
        return 10
      }
    },
    world(state){
      return state.list.world
    },
    tour(state){
      return state.list.tour
    },
    expreience(state){
      return state.list.expreience
    }
  },
  // 修改list
  mutations:{
    add:(state,value)=>{
      state.list.push(value);
    },
    del:(state,index)=>{
      console.log(index[1])
      if(index[1] == "upass"){
        state.list.upass.splice(index,1);
      }else if(index[1] == "user"){
        state.list.user.splice(index,1);
      }
    },
    detail(state,value){
      state.list.lid = value;
    }
  }
})