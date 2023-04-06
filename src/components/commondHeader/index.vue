<template>
<div class="fixed top-0 left-0 right-0 z-50 p-5 border-gray-50 lg:block hidden w-full mx-auto h-16 px-56 bg-white shadow-elementBox"
>
  <nav>
    <ul class=" flex items-center justify-between  text-lg text-indigo-900 font-medium relative z-50 ">
      <li class="flex ">
        <a class="flex items-center" href="/">
          <div>
            <img class="logo" :src="logo">
          </div>
          <div class="ml-3">
            <span class="text-xl font-bold hover:text-blue-600 duration-300">微梦创新</span>
          </div>
      </a>
      </li>
      <li class="underLine"><router-link to="/">首页</router-link></li>
      <li class="underLine cursor-pointer">
        <div @click="showEvent">解决方案</div>
      </li>
      <li class="underLine"><router-link to="cases">案例</router-link></li>
      <li class="underLine"><router-link to="news">新闻</router-link></li>
      <li class="underLine"><router-link to="aboutUs">关于我们</router-link></li>
      <li class="underLine"><router-link to="contact">联系我们</router-link></li>
    </ul>
<!--    弹框下拉框-->
    <homePopup :modelValue = "show">
      <ul class=" flex justify-between m-10">
        <li>
          <span class="titleTwo">软件开发</span>
          <ul class="my-2">
            <li class="mt-5 font-medium"  @click="()=>show=false">
              <span>小程序开发</span>
              <p class="my-2 text-sm font-normal text-navy-400"><router-link to="miniProgram">定制化开发小程序</router-link></p>
            </li>
            <li class="mt-5 font-medium" @click="()=>show=false">
              <span>网站开发</span>
              <p class="my-2 text-sm font-normal text-navy-400"><router-link to="website">官网</router-link></p>
            </li>
          </ul>
        </li>
        <li>
          <span class="titleTwo">营销推广</span>
          <ul class="my-2">
            <li class="mt-5 font-medium" @click="()=>show=false">
              <span>百度竞价</span>
              <p class="my-2 text-sm font-normal text-navy-400"><router-link to="promotion">百度竞价排名提高品牌曝光度</router-link></p>
            </li>
            <li class="mt-5 font-medium" @click="()=>show=false">
              <span>信息流推广</span>
              <p class="my-2 text-sm font-normal text-navy-400"><router-link to="informationFlow">信息流推广提高精准获客率</router-link></p>
            </li>
          </ul>
        </li>
        <li>
          <span class="titleTwo">广告设计</span>
          <ul class="my-2">
            <li class="mt-5 font-medium" @click="()=>show=false">
              <span>广告设计</span>
              <p class="my-2 text-sm font-normal text-navy-400"><router-link to="advertisingDesign">广告设计服务</router-link></p>
            </li>
            <li class="mt-5 font-medium" @click="()=>show=false">
              <span>批量印刷</span>
              <p class="my-2 text-sm font-normal text-navy-400"><router-link to="printing">广告纸媒、海报的印刷与制作</router-link></p>
            </li>
          </ul>
        </li>
        <li>
          <span class="titleTwo">全托管模式</span>
          <ul class="my-2">
            <li class="mt-5 font-medium" @click="()=>show=false">
              <span>代运营</span>
              <p class="my-2 text-sm font-normal text-navy-400"><router-link to="agentOperation">提供网络推广的代运营服务</router-link></p>
            </li>
            <li class="mt-5 font-medium" @click="()=>show=false">
              <span>全渠道</span>
              <p class="my-2 text-sm font-normal text-navy-400"><router-link to="omnichannelHosting">免费提供全渠道供应商</router-link></p>
            </li>
          </ul>
        </li>
      </ul>

    </homePopup>
  </nav>

</div>
</template>

<script setup>
import logo from "@/assets/homeimage/logo.svg"
import homePopup from "../homePopup/index.vue"
import {ref} from "vue";

const show = ref(false)
const showEvent=()=>{
  show.value = !show.value
}

const isScroll = ref(false)
const scrollEvent=()=>{
  isScroll.value = true
}
</script>

<style scoped>
/* css样式 */
.underLine {
  position: relative;
  text-decoration: none;
  font-size: 20px;
}

.underLine:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: linear-gradient(
      43.5deg,
      #38bdf8 -9.3%,
      #38bdf8 23.22%,
      #637eff 46.1%,
      #2563eb 84.13%
  );
  transition: all 0.3s;
}
.underLine:hover:before {
  width: 100%;
  left: 0;
  right: 0;
}
.main-container{
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  //max-width: calc(var(--layoutWidth) + 2*var(--padding-x-gap));
  //padding: 0 var(--padding-x-gap);
}
.logo{
  @apply w-10 h-10
}
.titlecolor{
  @apply cursor-pointer hover:text-navy-400 duration-300 hover:text-navy-400 duration-300
}
.titleTwo{
  @apply text-navy-300 text-2xl font-bold
}
</style>
