<template>
  <!--  banner-->
  <div
    class="mt-16 w-full bg-mini1 bgimage flex justify-center items-center animate__animated animate__slideInUp pt-36"
  >
    <div class="w-2/3 flex flex-col p-20 items-center text-center">
      <p
        class="text-navy-600 text-5xl font-extrabold leading-tight"
        data-aos="fade-up"
      >
        微梦创新通过VR技术 <br />
        助力中小企业 <br />
        更快地发展
      </p>
      <p class="text-blue-900 text-2xl my-10" data-aos="fade-up">
        加入成千上万依靠 微梦创新 发现、吸引和转化他们最有价值的客户的公司。
      </p>
      <button
        class="w-1/5 cursor-pointer ck-button-new ck-button-new--bold--blue"
        data-aos="fade-up"
      >
        联系我们
      </button>
    </div>
  </div>

  <div class="container mx-auto mt-10">
    <ul class="grid grid-cols-4">
      <template v-for="(item,index) in VRList" :key="index">
        <li>
          <div class="w-64 hover:shadow-elementBox rounded mt-5" @click="openDialog(item)">
            <img class="rounded w-64" :src="item.image">
            <div class="flex  items-center">
              <template v-for="item2 in item.titleList">
                <div class="w-10 h-4 bg-yellow-700 text-center rounded text-xs text-white m-1">{{item2}}</div>
              </template>
            </div>
            <p class="p-1">{{item.info}}</p>
          </div>
        </li>
      </template>
    </ul>
  </div>

<!--  -->
  <el-dialog :fromVR="fromVR" v-model="dialogVisible" width="70%" top="5vh" destroy-on-close="true">
    <div class="iframeBox">
      <iframe class="iframeBox2" :src="fromVR.url" frameborder="0"></iframe>
    </div>
  </el-dialog>
</template>

<script setup>
import {ref} from "vue";
import vr1 from "../../assets/vrimage/vr1.png"
import vr2 from "../../assets/vrimage/vr2.png"
import vr3 from "../../assets/vrimage/vr3.png"
import vr4 from "../../assets/vrimage/vr4.png"
import vr5 from "../../assets/vrimage/vr5.png"
import vr6 from "../../assets/vrimage/vr6.png"
import vr7 from "../../assets/vrimage/vr7.png"
import vr8 from "../../assets/vrimage/vr8.png"
const VRList=[
  {id:0,titleList:['酒店','精选'],image:vr1 ,info:"\"遇好\"酒店隶属于河南梁氏酒店管理集团，是集团公司在2021年成立的酒店自主品牌。",url:"https://www.720yun.com/vr/a38jOd4vsm1"},
  {id:1,titleList:['景区','精选'],image:vr2,info:"天山托木尔景区·大峡谷【VR】",url:"https://www.720yun.com/vr/05328qpuutr"},
  {id:2,titleList:['景区','精选'],image:vr3,info:"青州古城",url:"https://www.720yun.com/t/4dvkt9i9O17?scene_id=71345201"},
  {id:3,titleList:['企业','精选'],image:vr4,info:"东营嘉扬精密金属有限公司",url:"https://www.720yun.com/t/a8vk6mfysd7?scene_id=106792676"},
  {id:4,titleList:['装修','家居','精选'],image:vr5,info:"装修家具设计图",url:"https://www.720yun.com/vr/62bjOdwnzw2"},
  {id:5,titleList:['装修','家居','精选'],image:vr6,info:"装修家具设计图2",url:"https://www.720yun.com/vr/2d0jOdhurw1"},
  {id:6,titleList:['学院','精选'],image:vr7,info:"山东交通学院",url:"https://www.720yun.com/t/43vkzq2qpre?scene_id=104137762"},
  {id:7,titleList:['餐饮','精选'],image:vr8,info:"越秀餐饮",url:"https://www.720yun.com/vr/adbjOdsytw6"},
]

const dialogVisible = ref(false)
const fromVR = ref()
const openDialog = (val)=>{
  dialogVisible.value = true
  fromVR.value = val
}
</script>

<style scoped>
.bgimage {
  height: 800px;
  background: url("../../assets/solutionImage/bg-mini.jpg") no-repeat;
  background-size: cover;
}

.ck-button-new {
  position: relative;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  font-family: Eina, system-ui, -apple-system, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 0.9375rem;
  font-weight: 700;
}
.ck-button-new--bold--blue {
  height: 3rem;
  justify-content: center;
  border-radius: 0.625rem;
  background-color: transparent;
  line-height: 2;
  --tw-text-opacity: 1;
  color: rgb(250 251 252 / var(--tw-text-opacity));
  padding: 0 26px;
  position: relative;
  border: 1px solid rgba(66, 76, 222, 0.2);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08), 0 -1px 1px rgba(0, 0, 0, 0.08),
    0 2px 2px rgba(0, 0, 0, 0.16), inset 0 1px 0 hsla(0, 0%, 100%, 0.16);
  overflow: hidden;
  background: linear-gradient(
      180deg,
      rgba(66, 76, 222, 0.2),
      transparent 100%,
      rgba(66, 76, 222, 0) 0
    ),
    linear-gradient(
      90deg,
      rgba(37, 6, 228, 0.8),
      rgba(54, 126, 255, 0.8) 80%,
      rgba(54, 126, 255, 0.8)
    ),
    rgba(66, 76, 222, 0.8);
  transition: all 0.3s ease-in-out;
  background-size: 200% 100%;
  background-position-x: 50%;
}

.ck-button-new--bold--blue:hover {
  background-position-x: 98%;
}
.iframeBox {
  width: 100%;
  height: 80vh;
  .iframeBox2 {
    width: 100%;
    height: 100%;
  }
}
</style>
