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

  <div class="container mx-auto pt-10">
    <template v-for="item in imageList">
      <img :src="item">
    </template>
  </div>
</template>

<script setup>
import xinxiliu1 from "../../assets/infoFlow/xinxiliu1.jpg"
import xinxiliu2 from "../../assets/infoFlow/xinxiliu2.jpg"
import xinxiliu3 from "../../assets/infoFlow/xinxiliu3.jpg"
import xinxiliu4 from "../../assets/infoFlow/xinxiliu4.jpg"
import xinxiliu5 from "../../assets/infoFlow/xinxiliu5.jpg"
import xinxiliu6 from "../../assets/infoFlow/xinxiliu6.jpg"
import xinxiliu7 from "../../assets/infoFlow/xinxiliu7.jpg"
import xinxiliu8 from "../../assets/infoFlow/xinxiliu8.jpg"
import xinxiliu9 from "../../assets/infoFlow/xinxiliu9.jpg"
import xinxiliu10 from "../../assets/infoFlow/xinxiliu10.jpg"
import xinxiliu11 from "../../assets/infoFlow/xinxiliu11.jpg"
import xinxiliu12 from "../../assets/infoFlow/xinxiliu12.jpg"
import xinxiliu13 from "../../assets/infoFlow/xinxiliu13.jpg"
import xinxiliu14 from "../../assets/infoFlow/xinxiliu14.jpg"
import xinxiliu15 from "../../assets/infoFlow/xinxiliu15.jpg"
import xinxiliu16 from "../../assets/infoFlow/xinxiliu16.jpg"
import xinxiliu17 from "../../assets/infoFlow/xinxiliu17.jpg"
import xinxiliu18 from "../../assets/infoFlow/xinxiliu18.jpg"
import xinxiliu19 from "../../assets/infoFlow/xinxiliu19.jpg"
import xinxiliu20 from "../../assets/infoFlow/xinxiliu20.jpg"
import xinxiliu21 from "../../assets/infoFlow/xinxiliu21.jpg"
import xinxiliu22 from "../../assets/infoFlow/xinxiliu22.jpg"
import xinxiliu23 from "../../assets/infoFlow/xinxiliu23.jpg"
import xinxiliu24 from "../../assets/infoFlow/xinxiliu24.jpg"
import xinxiliu25 from "../../assets/infoFlow/xinxiliu25.jpg"
import xinxiliu26 from "../../assets/infoFlow/xinxiliu26.jpg"
import xinxiliu27 from "../../assets/infoFlow/xinxiliu27.jpg"
import xinxiliu28 from "../../assets/infoFlow/xinxiliu28.jpg"
import xinxiliu29 from "../../assets/infoFlow/xinxiliu29.jpg"
import xinxiliu30 from "../../assets/infoFlow/xinxiliu30.jpg"
import xinxiliu31 from "../../assets/infoFlow/xinxiliu31.jpg"
import xinxiliu32 from "../../assets/infoFlow/xinxiliu32.jpg"
import xinxiliu33 from "../../assets/infoFlow/xinxiliu33.jpg"
import xinxiliu34 from "../../assets/infoFlow/xinxiliu34.jpg"
import xinxiliu35 from "../../assets/infoFlow/xinxiliu35.jpg"
import xinxiliu36 from "../../assets/infoFlow/xinxiliu36.jpg"
import xinxiliu37 from "../../assets/infoFlow/xinxiliu37.jpg"
import xinxiliu38 from "../../assets/infoFlow/xinxiliu38.jpg"
import xinxiliu39 from "../../assets/infoFlow/xinxiliu39.jpg"
import xinxiliu40 from "../../assets/infoFlow/xinxiliu40.jpg"
import xinxiliu41 from "../../assets/infoFlow/xinxiliu41.jpg"
import xinxiliu42 from "../../assets/infoFlow/xinxiliu42.jpg"
import xinxiliu43 from "../../assets/infoFlow/xinxiliu43.jpg"
import xinxiliu44 from "../../assets/infoFlow/xinxiliu44.jpg"
const imageList =[
  xinxiliu1,xinxiliu2,xinxiliu3,xinxiliu4,xinxiliu5,xinxiliu6,xinxiliu7,xinxiliu8,xinxiliu9,xinxiliu10,
  xinxiliu11,xinxiliu12,xinxiliu13,xinxiliu14,xinxiliu15,xinxiliu16,xinxiliu17,xinxiliu18,xinxiliu19,xinxiliu20,
  xinxiliu21,xinxiliu22,xinxiliu23,xinxiliu24,xinxiliu25,xinxiliu26,xinxiliu27,xinxiliu28,xinxiliu29,xinxiliu30,xinxiliu31,
  xinxiliu32,xinxiliu33,xinxiliu34,xinxiliu35,xinxiliu36,xinxiliu37,xinxiliu38,xinxiliu39,xinxiliu40,xinxiliu41,
  xinxiliu42,xinxiliu43,xinxiliu44
]
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
