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
    <div>

    </div>
  </div>
</template>

<script setup>

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
