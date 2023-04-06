<template>
<div class="rounded-2xl" id="containerMap"></div>
</template>

<script setup>
import AMapLoader from "@amap/amap-jsapi-loader"
import {onMounted} from "vue";
window._AMapSecurityConfig={
  securityJsCode:"fb5f7145302051e0469d6d2499960bdb"
}
onMounted(() => AMapLoader.load({
  "key": "44b99d9756309eeeceacd8360ea83a2c",// 申请好的Web端开发者Key，首次调用 load 时必填
  "version": "2.0",   // 指定要加载的 JS API 的版本，缺省时默认为 1.4.15
  "plugins": [],      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
}).then((AMap)=>{
  var map = new AMap.Map('containerMap',{
    pitch:65, // 地图俯仰角度，有效范围 0 度- 83 度
    viewMode:'3D', //开启3D视图,默认为关闭
    terrain: true ,// 开启地形图
    zoom:17, //初始化地图层级
    center: [120.454247, 36.108269] //初始化地图中心点
  });
  map.add(marker);
  // var info = [];
  // info.push("<div class='input-card content-window-card'><div></div> ");
  // info.push("<div style=\"padding:7px 0px 0px 7px;\"><h4>微梦创新</h4>");
  // info.push("<p class='input-item'>电话 : 15624181187 </p>");
  // info.push("<p class='input-item'>地址 :山东省青岛市崂山区海尔路182号出版大厦3号楼18楼F22室</p></div></div>");
  //
  // var infoWindow = new AMap.InfoWindow({
  //   content: info.join("")  //使用默认信息窗体框样式，显示信息内容
  // });
  //
  // infoWindow.open(map, map.getCenter());
}).catch(e => {
  console.log(e);
}))
const position = new AMap.LngLat(120.454247, 36.108269); // Marker经纬度
const marker = new AMap.Marker({
  position: position,
  content:  '' +
      '<div class="custom-content-marker">' +
      '   <img src="//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png">' +
      '</div>', // 将 html 传给 content
  offset: new AMap.Pixel(-13, -30) // 以 icon 的 [center bottom] 为原点
});

const openInfo =()=>{
  //在指定位置打开信息窗体
    //构建信息窗体中显示的内容
    var info = [];
    info.push("<div class='input-card content-window-card'><div><img style=\"float:left;width:67px;height:16px;\" src=\" https://webapi.amap.com/images/autonavi.png \"/></div> ");
    info.push("<div style=\"padding:7px 0px 0px 0px;\"><h4>高德软件</h4>");
    info.push("<p class='input-item'>电话 : 010-84107000   邮编 : 100102</p>");
    info.push("<p class='input-item'>地址 :北京市朝阳区望京阜荣街10号首开广场4层</p></div></div>");

    var infoWindow = new AMap.InfoWindow({
      content: info.join("")  //使用默认信息窗体框样式，显示信息内容
    });

    infoWindow.open(map, map.getCenter());
}


</script>

<style scoped>
html, body, #containerMap {
  height: 100%;
  width: 100%;
  margin: 0;
}
.custom-content-marker {
  position: relative;
  width: 25px;
  height: 34px;
}

.custom-content-marker img {
  width: 100%;
  height: 100%;
}

.custom-content-marker .close-btn {
  position: absolute;
  top: -6px;
  right: -8px;
  width: 15px;
  height: 15px;
  font-size: 12px;
  background: #ccc;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 15px;
  box-shadow: -1px 1px 1px rgba(10, 10, 10, .2);
}

.custom-content-marker .close-btn:hover{
  background: #666;
}
.custom-input-card{
  width: 18rem;
}

.custom-input-card .btn:last-child{
  margin-left: 1rem;
}

.content-window-card{
  position: relative;
  width: 23rem;
  padding: 0.75rem 0 0 1.25rem;
  box-shadow: none;
  bottom: 0;
  left: 0;
}

.content-window-card p{
  height: 2rem;
}
</style>
