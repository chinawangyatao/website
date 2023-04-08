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
<div class="container mx-auto text-center p-20">
  <h1 class="text-3xl">支持不同场景，提供高效服务</h1>
  <span class="text-gray-500">全场景覆盖，提供快速高效的网站建设服务</span>
</div>
  <div>
    <ul class="container mx-auto flex flex-wrap">
      <li class="px-10" data-aos="fade-up">
        <div class="image_1">
          <div class="p-8 ml-24">
            <h1 class="text-xl">展示官网</h1>
            <span class="text-gray-500 py-5">精美的企业官网形象展示设计</span>
          </div>
        </div>
      </li>
      <li class="px-10" data-aos="fade-up">
        <div class="image_2">
          <div class="py-10 px-9 ml-24">
            <h1 class="text-lg">电脑+手机+微网站+网页小程序</h1>
            <span class="text-gray-500 py-5">一次创建，覆盖多端展示</span>
          </div>
        </div>
      </li>
      <li class="px-10" data-aos="fade-up">
        <div class="image_3">
          <div class="p-8 ml-24">
            <h1 class="text-xl">产品展示</h1>
            <span class="text-gray-500 py-5">图片、视频等多种形式展示产品</span>
          </div>
        </div>
      </li>
      <li class="px-10" data-aos="fade-up">
        <div class="image_4">
          <div class="p-8 ml-24">
            <h1 class="text-xl">内容管理</h1>
            <span class="text-gray-500 py-5"
              >文章、产品、素材等内容后台高效管理</span
            >
          </div>
        </div>
      </li>
      <li class="px-10" data-aos="fade-up">
        <div class="image_5">
          <div class="p-8 ml-24">
            <h1 class="text-xl">在线支付</h1>
            <span class="text-gray-500 py-5">支持多种在线支付与表单支付</span>
          </div>
        </div>
      </li>
      <li class="px-10" data-aos="fade-up">
        <div class="image_6">
          <div class="p-8 ml-24">
            <h1 class="text-xl">信息发布</h1>
            <span class="text-gray-500 py-5">轻松发布新闻动态、行业咨询等</span>
          </div>
        </div>
      </li>
      <li class="px-10" data-aos="fade-up">
        <div class="image_7">
          <div class="p-8 ml-24">
            <h1 class="text-xl">全网营销</h1>
            <span class="text-gray-500 py-5">多种营销互动工具，有效转化</span>
          </div>
        </div>
      </li>
      <li class="px-10" data-aos="fade-up">
        <div class="image_8">
          <div class="p-8 ml-24">
            <h1 class="text-xl">网站推广优化</h1>
            <span class="text-gray-500 py-5"
              >有效提升搜索引擎对网站的收录及排名</span
            >
          </div>
        </div>
      </li>
      <li class="px-10" data-aos="fade-up">
        <div class="image_9">
          <div class="p-8 ml-24">
            <h1 class="text-xl">个性设计定制</h1>
            <span class="text-gray-500 py-5">1V1专业团队专属个性设计定制</span>
          </div>
        </div>
      </li>
      <li class="px-10" data-aos="fade-up">
        <div class="image_10">
          <div class="p-8 ml-24">
            <h1 class="text-xl">获客留资</h1>
            <span class="text-gray-500 py-5">多种获客组件提高获客留资效率</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import xinixfabu from "../../assets/website/AB1.png";
import zhanshiguanwang from "../../assets/website/AB10.png";
const ABList = [
  {
    title: "展示官网",
    text: "精美的企业官网形象展示设计",
    icon: zhanshiguanwang,
  },
  { title: "信息发布", text: "轻松发布新闻动态、行业咨询等", icon: xinixfabu },
];
</script>

<style scoped>
.image_1 {
  background: url("../../assets/website/AB10.png") no-repeat;
  width: 424px;
  height: 144px;
}
.image_2 {
  background: url("../../assets/website/AB6.png") no-repeat;
  width: 424px;
  height: 144px;
}
.image_3 {
  background: url("../../assets/website/AB2.png") no-repeat;
  width: 424px;
  height: 144px;
}
.image_4 {
  background: url("../../assets/website/AB9.png") no-repeat;
  width: 424px;
  height: 144px;
}
.image_5 {
  background: url("../../assets/website/AB5.png") no-repeat;
  width: 424px;
  height: 144px;
}
.image_6 {
  background: url("../../assets/website/AB1.png") no-repeat;
  width: 424px;
  height: 144px;
}
.image_7 {
  background: url("../../assets/website/AB8.png") no-repeat;
  width: 424px;
  height: 144px;
}
.image_8 {
  background: url("../../assets/website/AB4.png") no-repeat;
  width: 424px;
  height: 144px;
}
.image_9 {
  background: url("../../assets/website/AB7.png") no-repeat;
  width: 424px;
  height: 144px;
}
.image_10 {
  background: url("../../assets/website/AB3.png") no-repeat;
  width: 424px;
  height: 144px;
}
.rotateImage:hover {
  animation: rotateImage 1.5s;
  animation-iteration-count: 1;
}

@keyframes rotateImage {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
.imageRight {
  width: 500px;
}
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
