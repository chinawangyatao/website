<template>
  <!--  banner-->
  <div class="mt-16 w-full bgimage flex justify-center items-center animate__animated animate__slideInUp">
    <div class="w-2/3 flex flex-col items-center"
         data-aos="fade-up">
      <p
          class="text-navy-600 text-5xl font-extrabold text-center leading-tight"
      >
        了解 B2B 公司如何通过 <br />
        微梦创新服务 <br />
        更快地发展
      </p>
      <p class="text-blue-900 text-2xl text-center my-10">
        加入成千上万依靠 微梦创新 发现、吸引和转化他们最有价值的客户的公司。
      </p>
      <button class="cursor-pointer ck-button-new ck-button-new--bold--blue">
        联系我们
      </button>
    </div>
  </div>
<!--  内容-->
  <div class=" bg-navy-100 border" style="height: 1200px">
    <div class="flex flex-col items-center justify-center content-center p-20 "  data-aos="fade-up">
      <div class="w-full h-96 bg-white m-10 rounded-xl " style="height: 600px"><maps/></div>
<!--      <div class="w-1/2 h-96 bg-black m-5"></div>-->
    </div>
    <div class="container mx-auto flex"  data-aos="fade-up">
      <div class="w-1/2 "><img src="https://picsum.photos/600/300"></div>
      <div class="w-1/2 p-10 font-bold text-xl">
        <div class="my-5"><span>公司名称 : 青岛微梦创新科技有限公司</span></div>
        <div class="my-5"><span>公司地址 : 山东省青岛市崂山区海尔路182号出版大厦3号楼18楼F22室</span></div>
        <div class="my-5"><span>联系方式 : 156-2418-1187</span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import maps from "./maps/index.vue"

</script>

<style scoped>
.bgimage {
  height: 450px;
  background: url("https://picsum.photos/seed/picsum/1920/600") no-repeat;
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
