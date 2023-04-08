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
  <div>
    <div>
      <ul class="grid grid-cols-3 gap-4 p-20">
        <template v-for="(item, index) in infoList" :key="index">
          <li data-aos="fade-up">
            <div class="flex p-5">
              <img class="w-10 h-10" :src="item.icon" />
              <div class="px-10">
                <h1 class="text-lg font-extrabold">{{ item.title }}</h1>
                <span class="text-sm text-gray-500">{{ item.text }}</span>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
    <div class="bg-navy-900 border" data-aos="fade-up">
      <img class="container mx-auto" :src="bgimage1" />
    </div>

    <div class="container mx-auto flex" data-aos="fade-up">
      <div class="w-2/3 content-center">
        <img :src="gandup_61" />
      </div>
      <div class="p-20 flex flex-col items-start justify-center">
        <h1 class="text-2xl">多渠道开店，聚合流量快速引流</h1>
        <div class="text-gray-500 font-extralight py-7">
          打通微信、视频号、百度、支付宝、快手、小红书、QQ、App开店、腾讯惠聚、美团闪购等多个平台一键开店、统一管理、多渠道引流
        </div>
        <el-button type="primary">立即咨询</el-button>
      </div>
    </div>
<div class="bg-indigo-100" data-aos="fade-up">
  <div class="container mx-auto flex">
    <div class="p-20 flex flex-col items-start justify-center">
      <h1 class="text-2xl">多业务形态，满足不同商户多样化需求</h1>
      <div class="text-gray-500 font-extralight py-7">
        支持实物、海淘、虚拟等多种商品类型。针对多应用、多模式商户提供不同应用能力
      </div>
      <el-button type="primary">立即咨询</el-button>
    </div>
    <div class="w-2/3 flex content-center"><img :src="gandup_102" /></div>
  </div>
</div>

    <div class="container mx-auto flex" data-aos="fade-up">
      <div class="w-2/3 content-center">
        <img :src="gandup_103" />
      </div>
      <div class="p-20 flex flex-col items-start justify-center">
        <h1 class="text-2xl">完整开店系统，轻松搭建在线商城</h1>
        <div class="text-gray-500 font-extralight py-7">
          数十种装修组件，上百套行业模板，满足不同行业搭建需求，帮助商家快速搭建属于自己的个性化独立商城
        </div>
        <el-button type="primary">立即咨询</el-button>
      </div>
    </div>

    <div class="bg-indigo-100" data-aos="fade-up">
      <div class="container mx-auto flex">
        <div class="p-20 flex flex-col items-start justify-center">
          <h1 class="text-2xl">全流域获客，构建品牌私域用户池</h1>
          <div class="text-gray-500 font-extralight py-7">
            将微信生态、腾讯生态及其他生态中的公域流量导流至微商城中，打造品牌自有私域流量池
          </div>
          <el-button type="primary">立即咨询</el-button>
        </div>
        <div class="w-2/3 flex content-center"><img :src="gandup_104" /></div>
      </div>
    </div>

    <div class="container mx-auto flex" data-aos="fade-up">
      <div class="w-2/3 flex content-center">
        <img v-if="active==0" :src="gandup_105" data-aos="fade-right" data-aos-delay="100" />
        <img v-else-if="active==1" :src="gandup_29" data-aos="fade-right" data-aos-delay="100"  />
        <img v-else :src="gandup_30" data-aos="fade-right" data-aos-delay="100"  />

      </div>
      <div class="p-20 flex flex-col items-start justify-center">
        <h1 class="text-2xl">百余种营销玩法，吸粉裂变促转化</h1>
        <div class="text-gray-500 font-extralight py-7">
          大转盘、拼团、种草笔记的等多种营销活动刺激客户购买。带动商家业绩增长提效
        </div>
        <div
            class="border py-3 rounded-md  my-1.5 cursor-pointer duration-500"
            @click="changeActive(0)"
            :class="active==0?'border-indigo-600 border-l-4':''"
        ><span class="p-5">互动营销，趣味游戏吸粉裂变，提升活跃度和留存率</span></div>
        <div class="border py-3 rounded-md my-1.5 cursor-pointer duration-500"
             @click="changeActive(1)"
             :class="active==1?'border-indigo-600 border-l-4':''"
        ><span class="p-5">互动营销，趣味游戏吸粉裂变，提升活跃度和留存率</span></div>
        <div class="border py-3 rounded-md  my-1.5 cursor-pointer duration-500"
             @click="changeActive(2)"
             :class="active==2?'border-indigo-600 border-l-4':''"
        ><span class="p-5">互动营销，趣味游戏吸粉裂变，提升活跃度和留存率</span></div>
        <el-button class="mt-5" type="primary">立即咨询</el-button>
      </div>
    </div>


    <div class="bg-indigo-100" data-aos="fade-up">
      <div class="container mx-auto flex">
        <div class="p-20 flex flex-col items-start justify-center">
          <h1 class="text-2xl">分销裂变提高销量，让人人都是商家分销员</h1>
          <div class="text-gray-500 font-extralight py-7">
            构建完整分销体系，佣金奖励、等级刺激、功能灵活。全面满足商家全场景营销需求
          </div>
          <el-button type="primary">立即咨询</el-button>
        </div>
        <div class="w-2/3 flex content-center"><img :src="gandup_106" /></div>
      </div>
    </div>


    <div class="container mx-auto flex" data-aos="fade-up">
      <div class="w-2/3 flex content-center">
        <img v-if="active2==0" :src="gandup_109" data-aos="fade-right" data-aos-delay="100" />
        <img v-else-if="active2==1" :src="gandup_38" data-aos="fade-right" data-aos-delay="100"  />
        <img v-else :src="gandup_20" data-aos="fade-right" data-aos-delay="100"  />

      </div>
      <div class="p-20 flex flex-col items-start justify-center">
        <h1 class="text-2xl">全链路数据分析，数据反哺智慧经营决策</h1>
        <div class="text-gray-500 font-extralight py-7">
          多角度、全方位的店铺经营分析，数据驱动营销决策，促进业绩增长
        </div>
        <div
            class="border py-3 rounded-md  my-1.5 cursor-pointer duration-500"
            @click="changeActive2(0)"
            :class="active2==0?'border-indigo-600 border-l-4':''"
        ><span class="p-5">数据看板，提供全链路智慧经营决策</span></div>
        <div class="border py-3 rounded-md my-1.5 cursor-pointer duration-500"
             @click="changeActive2(1)"
             :class="active2==1?'border-indigo-600 border-l-4':''"
        ><span class="p-5">多维分析，提供自定义视角数据分析</span></div>
        <div class="border py-3 rounded-md  my-1.5 cursor-pointer duration-500"
             @click="changeActive2(2)"
             :class="active2==2?'border-indigo-600 border-l-4':''"
        ><span class="p-5">自助制表，提供自主分析可视化呈现</span></div>
        <el-button class="mt-5" type="primary">立即咨询</el-button>
      </div>
    </div>




  </div>
</template>

<script setup>
import gandup_61 from "../../assets/solutionImage/gandup-61.png";
import gandup_102 from "../../assets/solutionImage/gandup-102.png";
import gandup_103 from "../../assets/solutionImage/gandup-103.png";
import gandup_104 from "../../assets/solutionImage/gandup-104.png";
import gandup_105 from "../../assets/solutionImage/gandup-105.png";
import gandup_106 from "../../assets/solutionImage/gandup-106.png";
import gandup_109 from "../../assets/solutionImage/gandup-109.png";
import gandup_29 from "../../assets/solutionImage/gandup-29.png";
import gandup_30 from "../../assets/solutionImage/gandup-30.png";
import gandup_38 from "../../assets/solutionImage/gandup-38.png";
import gandup_20 from "../../assets/solutionImage/gandup-20.png";
import bgimage1 from "../../assets/solutionImage/bgimage1.png";
import icon1 from "../../assets/solutionImage/icon1.png";
import icon2 from "../../assets/solutionImage/icon2.png";
import icon3 from "../../assets/solutionImage/icon3.png";
import icon4 from "../../assets/solutionImage/icon4.png";
import icon5 from "../../assets/solutionImage/icon5.png";
import icon6 from "../../assets/solutionImage/icon6.png";
import {ref} from "vue";

const infoList = [
  {
    title: "多平台开店",
    text: "支持微信、小红书、快手、支付宝、QQ等多平台小程序一键生成",
    icon: icon1,
  },
  {
    title: "丰富营销插件",
    text: "拼团、砍价、满减满折、种草笔记等丰富营销方式，快速提升销量",
    icon: icon2,
  },
  {
    title: "全域会员精细运营",
    text: "全域会员多渠道统一管理，客户标签化分类分层运营，沉淀会员资产",
    icon: icon3,
  },
  {
    title: "快速裂变分销",
    text: "裂变分销快速拓展销售渠道，促进商家业绩增长",
    icon: icon4,
  },
  {
    title: "企微驱动私域赋能",
    text: "强化企业微信能力，提供全面的私域用户管理运营服务",
    icon: icon5,
  },
  {
    title: "数据赋能经营提效",
    text: "多角度、全方位的店铺经营分析数据驱动智慧决策，促进业绩增长",
    icon: icon6,
  },
];

const active = ref(0)
const changeActive=(item)=>{
  active.value = item
}

const active2 = ref(0)
const changeActive2=(item)=>{
  active2.value = item
}





</script>

<style lang="scss" scoped>
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
