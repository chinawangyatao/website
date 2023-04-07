<template>
<!--  banner-->
<div class="mt-16 w-full bgimage flex justify-center items-center animate__animated animate__slideInUp">
  <div class="w-2/3 flex flex-col items-center" >
    <p class="text-navy-600 text-5xl font-extrabold text-center leading-tight" data-aos="fade-up">了解 B2B 公司如何通过 <br> 微梦创新服务 <br> 更快地发展</p>
    <p class="text-blue-900 text-2xl text-center my-10" data-aos="fade-up">加入成千上万依靠 微梦创新 发现、吸引和转化他们最有价值的客户的公司。</p>
    <button class="cursor-pointer ck-button-new ck-button-new--bold--blue" data-aos="fade-up">联系我们</button>
  </div>
</div>
<div class="container mx-auto">
<!--  案例-->
  <div class="p-10 flex">
    <div class="w-1/2 rounded-2xl h-96 bg-blue-200 m-5 shadow-elementBox" data-aos="fade-right">
      <div class="w-full h-1/2">
        <img class="rounded-t-2xl" src="https://picsum.photos/seed/picsum/900/300">
        <div class="p-5"><span>餐饮公司</span></div>
        <p class="px-5 text-navy-600">Contractbook 通过与 Clearbit 建立基于意图的外展策略，将他们的出站响应率提高了一倍。</p>
        <div><button class=" text-sm px-5 mt-2 font-medium text-blue-900 hover:text-navy-300">了解更多 ></button></div>
      </div>
    </div>
    <div class="w-1/2 rounded-2xl h-96 bg-blue-200 m-5 shadow-elementBox" data-aos="fade-left">
      <div class="w-full h-1/2">
        <img class="rounded-t-2xl" src="https://picsum.photos/seed/picsum/900/300">
        <div class="p-5"><span>餐饮公司</span></div>
        <p class="px-5 text-navy-600">Contractbook 通过与 Clearbit 建立基于意图的外展策略，将他们的出站响应率提高了一倍。</p>
        <div><button class=" text-sm px-5 mt-2 font-medium text-blue-900 hover:text-navy-300">了解更多 ></button></div>
      </div>
    </div>
  </div>
<!-- 案例展示 -->
  <div>
    <h1 class="text-navy-700 text-center font-bold text-2xl">案例展示</h1>
    <div class="flex flex-wrap">
      <template v-for="(item,index) in caseList" :key="index">
        <div class="w-96 mt-5 p-5" data-aos="fade-up">
          <img class="rounded-xl shadow-2xl" src="https://picsum.photos/500/700">
          <p class="text-center mt-5 text-blue-900 font-extrabold">{{ item.title }}</p>
        </div>
      </template>
    </div>

  </div>
</div>

</template>

<script setup>
const caseList=[
  {
    title:"《餐饮业》"
  },
  {
    title: "《制造业》"
  },
  {
    title: "《农业》"
  },
  {
    title: "《医疗行业》"
  },
  {
    title: "《化工行业》"
  },
  {
    title: "《机械行业》"
  },
]
</script>

<style scoped>
.bgimage{
  height: 750px;
  background: url("https://picsum.photos/seed/picsum/1920/600") no-repeat;
  background-size: cover;
}
.ck-button-new {
  position: relative;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  font-family: Eina,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  font-size: .9375rem;
  font-weight: 700
}
.ck-button-new--bold--blue {
  height: 3rem;
  justify-content: center;
  border-radius: .625rem;
  background-color: transparent;
  line-height: 2;
  --tw-text-opacity: 1;
  color: rgb(250 251 252/var(--tw-text-opacity));
  padding: 0 26px;
  position: relative;
  border: 1px solid rgba(66,76,222,.2);
  box-shadow: 0 4px 4px rgba(0,0,0,.08),0 -1px 1px rgba(0,0,0,.08),0 2px 2px rgba(0,0,0,.16),inset 0 1px 0 hsla(0,0%,100%,.16);
  overflow: hidden;
  background: linear-gradient(180deg,rgba(66,76,222,.2),transparent 100%,rgba(66,76,222,0) 0),linear-gradient(90deg,rgba(37,6,228,.8),rgba(54,126,255,.8) 80%,rgba(54,126,255,.8)),rgba(66,76,222,.8);
  transition: all .3s ease-in-out;
  background-size: 200% 100%;
  background-position-x: 50%
}

.ck-button-new--bold--blue:hover {
  background-position-x: 98%
}
</style>
