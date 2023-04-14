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
        了解 B2B 公司如何通过 <br />
        微梦创新服务 <br />
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

  <div class="container mx-auto text-center pt-10" data-aos="fade-up">
    <h1 class="text-3xl">推广的重要性</h1>
    <span class="text-gray-500">我们正在经历一个"酒香也怕巷子深的年代"</span>
  </div>

  <div class="container mx-auto text-gray-500 mt-10 text-xl leading-8" data-aos="fade-up">
    <span>盲目性的推广钱花了不少了，为什么还是生意一般或者盈利清淡呢？对于很多小卖家而言那些烧钱的推广也花不起，而且更不见实际效果。以至于对网商的经营快失去了信心。为什么呢？究其原因，关键在于没有针对性的推广，我们的推广是有针对性的，
      这样商品更容易形成集群效应。推广就是以最便宜的价格引来最有效的流量，最有效的流量不仅仅是多少个流量可以成交多少单，更是你自然搜素流量的增长，给平销带来的权重，要以一个整体、全局、规划性的思考方式去推广。</span>
    <div class="container mx-auto">
<template v-for="(item,index) in imageList" :key="index">
  <img :src =item>
</template>
    </div>
  </div>
</template>

<script setup>
import jingjia1 from "../../assets/promotion/jingjia1.jpg"
import jingjia2 from "../../assets/promotion/jingjia2.jpg"
import jingjia3 from "../../assets/promotion/jingjia3.jpg"
import jingjia4 from "../../assets/promotion/jingjia4.jpg"
import jingjia5 from "../../assets/promotion/jingjia5.jpg"
import jingjia6 from "../../assets/promotion/jingjia6.jpg"
import jingjia7 from "../../assets/promotion/jingjia7.jpg"
import jingjia8 from "../../assets/promotion/jingjia8.jpg"
import jingjia9 from "../../assets/promotion/jingjia9.jpg"
import jingjia10 from "../../assets/promotion/jingjia10.jpg"
import jingjia11 from "../../assets/promotion/jingjia11.jpg"
import jingjia12 from "../../assets/promotion/jingjia12.jpg"
import jingjia13 from "../../assets/promotion/jingjia13.jpg"
import jingjia14 from "../../assets/promotion/jingjia14.jpg"
import jingjia15 from "../../assets/promotion/jingjia15.jpg"
import jingjia16 from "../../assets/promotion/jingjia16.jpg"
import jingjia17 from "../../assets/promotion/jingjia17.jpg"
import jingjia18 from "../../assets/promotion/jingjia18.jpg"
import jingjia19 from "../../assets/promotion/jingjia19.jpg"
import jingjia20 from "../../assets/promotion/jingjia20.jpg"
import jingjia21 from "../../assets/promotion/jingjia21.jpg"
import jingjia22 from "../../assets/promotion/jingjia22.jpg"
import jingjia23 from "../../assets/promotion/jingjia23.jpg"
import jingjia24 from "../../assets/promotion/jingjia24.jpg"
import jingjia25 from "../../assets/promotion/jingjia25.jpg"
import jingjia26 from "../../assets/promotion/jingjia26.jpg"
import jingjia27 from "../../assets/promotion/jingjia27.jpg"
import jingjia28 from "../../assets/promotion/jingjia28.jpg"
import jingjia29 from "../../assets/promotion/jingjia29.jpg"
import jingjia30 from "../../assets/promotion/jingjia30.jpg"
import jingjia31 from "../../assets/promotion/jingjia31.jpg"
import jingjia32 from "../../assets/promotion/jingjia32.jpg"
import jingjia33 from "../../assets/promotion/jingjia33.jpg"
import jingjia34 from "../../assets/promotion/jingjia34.jpg"
import jingjia35 from "../../assets/promotion/jingjia35.jpg"
import jingjia36 from "../../assets/promotion/jingjia36.jpg"
import jingjia37 from "../../assets/promotion/jingjia37.jpg"
const imageList = [jingjia1,jingjia2,jingjia3,jingjia4,jingjia5,jingjia6,jingjia7,jingjia8,jingjia9,jingjia10,jingjia11,
  jingjia12,jingjia13,jingjia14,jingjia15,jingjia16,jingjia17,jingjia18,jingjia19,jingjia20,jingjia21,jingjia22,jingjia23,
  jingjia24,jingjia25,jingjia26,jingjia27,jingjia28,jingjia29,jingjia30,jingjia31,jingjia32,jingjia33,jingjia34,jingjia35,jingjia36,
  jingjia37]
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
</style>
