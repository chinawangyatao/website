<template>
  <div class="rounded-2xl" id="containerMap"></div>
</template>

<script setup>
import logo from "../../../assets/homeimage/logo.svg";
import AMapLoader from "@amap/amap-jsapi-loader";
import { onMounted, reactive } from "vue";
const state = reactive({
  path: [],
  current_position: [],
});
//进行地图初始化
function initMap() {
  AMapLoader.load({
    key: "44b99d9756309eeeceacd8360ea83a2c", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  })
    .then((AMap) => {
      const map = new AMap.Map("containerMap", {
        //设置地图容器id
        pitch: 65, // 地图俯仰角度，有效范围 0 度- 83 度
        viewMode: "3D", //是否为3D地图模式
        terrain: true, // 开启地形图
        zoom: 17, //初始化地图级别
        center: [120.454247, 36.108269], //初始化地图中心点位置
      });
      //添加插件
      AMap.plugin(["AMap.ToolBar", "AMap.Scale", "AMap.HawkEye"], function () {
        //异步同时加载多个插件
        map.addControl(new AMap.HawkEye()); //显示缩略图
        map.addControl(new AMap.Scale()); //显示当前地图中心的比例尺
      });
      addMarker();
      // 单击
      map.on("click", (e) => {
        // console.log(e);
        state.current_position = [e.lnglat.KL, e.lnglat.kT];
        state.path.push([e.lnglat.KL, e.lnglat.kT]);
        // addMarker();
        openInfo();
        // addPolyLine();
        // 地图按照适合展示图层内数据的缩放等级展示
        // map.setFitView();
      });
      // 实例化点标记
      function addMarker() {
        const marker = new AMap.Marker({
          icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
          position: [120.454247, 36.108269],
          offset: new AMap.Pixel(-26, -54),
          content:
            "" +
            '<div class="custom-content-marker">' +
            '   <img src="//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png">' +
            "</div>", // 将 html 传给 content
        });
        marker.setMap(map);
      }

      function openInfo() {
        //在指定位置打开信息窗体
        //构建信息窗体中显示的内容
        var info = [];
        info.push(
          '<div class=\'input-card content-window-card\'><div><img style="float:left;width:30px;height:30px;" :src=" ../../../assets/homeimage/logo.svg "/></div> '
        );
        info.push('<div style="padding:7px 0px 0px 0px;"><h4>青岛微梦创新科技有限公司</h4>');
        info.push(
          "<p class='input-item'>电话 : 010-84107000</p>"
        );
        info.push(
          "<p class='input-item'>地址 : 山东省青岛市崂山区海尔路182号出版大厦3号楼18楼F22室</p></div></div>"
        );

        var infoWindow = new AMap.InfoWindow({
          content: info.join(""), //使用默认信息窗体框样式，显示信息内容
        });

        infoWindow.open(map, map.getCenter());
      }
      // 折线
      function addPolyLine() {
        const polyline = new AMap.Polyline({
          path: state.path,
          isOutline: true,
          outlineColor: "#ffeeff",
          borderWeight: 1,
          strokeColor: "#3366FF",
          strokeOpacity: 0.6,
          strokeWeight: 5,
          // 折线样式还支持 'dashed'
          strokeStyle: "solid",
          // strokeStyle是dashed时有效
          // strokeDasharray: [10, 5],
          lineJoin: "round",
          lineCap: "round",
          zIndex: 50,
        });
        map.add([polyline]);
      }
    })
    .catch((e) => {
      console.log(e);
    });
}
initMap();
</script>

<style scoped>
html,
body,
#containerMap {
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
  box-shadow: -1px 1px 1px rgba(10, 10, 10, 0.2);
}

.custom-content-marker .close-btn:hover {
  background: #666;
}
.custom-input-card {
  width: 18rem;
}

.custom-input-card .btn:last-child {
  margin-left: 1rem;
}

.content-window-card {
  position: relative;
  width: 23rem;
  padding: 0.75rem 0 0 1.25rem;
  box-shadow: none;
  bottom: 0;
  left: 0;
}

.content-window-card p {
  height: 2rem;
}
</style>
