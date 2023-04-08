<template>
  <!--  banner-->
  <div class="mt-16 w-full bg-bg-banner1 bgimage flex justify-center items-center animate__animated animate__slideInUp">
    <div class="w-2/3 flex flex-col p-20" >
      <p class="text-navy-600 text-5xl font-extrabold leading-tight" data-aos="fade-up">了解 B2B 公司如何通过 <br> 微梦创新服务 <br> 更快地发展</p>
      <p class="text-blue-900 text-2xl my-10" data-aos="fade-up">加入成千上万依靠 微梦创新 发现、吸引和转化他们最有价值的客户的公司。</p>
      <button class="w-1/5 cursor-pointer ck-button-new ck-button-new--bold--blue" data-aos="fade-up">联系我们</button>
    </div>
    <div class="px-5 w-1/2 relative top-16 right-16 transform-gpu origin-center  duration-500" data-aos="fade-left"><img class="imageRight" :src="news"></div>
  </div>
  <div class="container mx-auto animate__animated animate__slideInLeft">
    <!--  案例-->
    <h1 class="text-navy-700 text-center font-bold text-2xl my-5">新闻中心</h1>
    <div class="flex justify-between">
      <div class="w-full px-10">
        <ul>
          <template v-for="(item, index) in listData" :key="index">
            <li class="border-b-2 m-5" data-aos="fade-up">
              <a href="news" class="flex justify-between">
                <p>{{ item.title }}</p>
                <p>{{ item.time }}</p>
              </a>
            </li>
          </template>
        </ul>
        <p class="text-right m-5 text-blue-900 font-bold cursor-pointer hover:text-navy-400" data-aos="fade-up">查看更多 ></p>
      </div>
      <div data-aos="fade-up">
        <img src="https://picsum.photos/seed/picsum/600/600" />
      </div>
    </div>
  </div>
</template>

<script setup>
import news from "../../assets/newsimage/news.png"
const listData = [
  {
    title: "中国首次星地高速相干激光通信试验成功秒速达5GB",
    time: "2023-1-21",
  },
  {
    title: "中国首次星地高速相干激光通信试验成功秒速达5GB",
    time: "2023-1-21",
  },
  {
    title: "中国首次星地高速相干激光通信试验成功秒速达5GB",
    time: "2023-1-21",
  },
  {
    title: "中国首次星地高速相干激光通信试验成功秒速达5GB",
    time: "2023-1-21",
  },
  {
    title: "中国首次星地高速相干激光通信试验成功秒速达5GB",
    time: "2023-1-21",
  },
  {
    title: "中国首次星地高速相干激光通信试验成功秒速达5GB",
    time: "2023-1-21",
  },
  {
    title: "中国首次星地高速相干激光通信试验成功秒速达5GB",
    time: "2023-1-21",
  },
  {
    title: "中国首次星地高速相干激光通信试验成功秒速达5GB",
    time: "2023-1-21",
  },
];
</script>

<style scoped>
.rotateImage:hover{
  animation: rotateImage 1.5s ;
  animation-iteration-count:1
}

@keyframes rotateImage {
  from {
    transform: rotateY(0deg)
  }
  to {
    transform: rotateY(360deg)
  }
}
.imageRight{
  width: 500px;
}
.bgimage {
  height: 750px;
  //background: url("https://picsum.photos/seed/picsum/1920/600") no-repeat;
  //background-size: cover;
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
</style>
