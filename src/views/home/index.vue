<template>
  <div class=" container mx-auto mt-10">
    <div class=" bg-home-image bg-no-repeat bg-center"
         style="height: 500px"
         data-aos="fade-up"
    >
      <div
        class="w-1/3 text-navy-600 text-5xl flex flex-col mx-auto py-10 font-bold text-left bg-home-image2 bg-no-repeat bg-left-top"
      >
        <p class="py-5">让传统从业者</p>
        <p>从产品中获取更多利润</p>

        <button
          class="cursor-pointer ck-button-new--bold--blue text-2xl mx-auto"
        >
          联系我们
        </button>
      </div>
    </div>
    <!--    模块二-->
    <div class="my-16 text-center font-bold text-4xl text-navy-600">
      <div>
        <p class="my-4">大多数企业低估了数字化对于增长的贡献</p>
        <p class="text-xl text-navy-300 font-light">
          数字化工具是增长的高速公路，是增长引擎持续奔跑的基础平台
        </p>
      </div>
      <div class="flex">
        <div class="shadow-elementBox w-1/2 p-10 m-10 rounded-3xl" data-aos="fade-up">
          <ul class="text-left text-2xl">
            <li>传统山型增长曲线</li>
            <li class="text-lg py-5 text-navy-300 font-extralight">
              企业用更多资源换得增长，ROI会逐渐下降<br />
              传统增长模式增长公式=资源投入*转化效率
            </li>
            <li>
              <img :src="tradition1" />
            </li>
          </ul>
        </div>
        <div class="shadow-elementBox w-1/2 p-10 m-10 rounded-3xl" data-aos="fade-up">
          <ul class="text-left text-2xl">
            <li>数字化时代新增长曲线</li>
            <li class="text-lg py-5 text-navy-300 font-extralight">
              数字化升级逐渐突破瓶颈，带来企业持续健康增长<br />
              数字化时代增长公式= 资源投入*可持续进化的转化效率
            </li>
            <li>
              <img :src="digitization1" />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="my-16 text-center font-bold text-4xl text-navy-600">
      <div data-aos="fade-up">做营销推广、做设计、做项目开发的痛点？</div>
    <div class="flex py-10" data-aos="fade-up">
      <div class="w-1/2 "><img :src="tongdian"></div>
      <div>
        <ul>
          <template v-for="(item,index) in listTitle" :key="index">
            <li data-aos="fade-up" class="h-12 w-full  bg-opacity-70 m-5 rounded-3xl text-left px-5 shadow-inner hover:shadow-xl transform hover:translate-y-6 duration-300 cursor-pointer "
                :class="index%2===0?'bg-purpleTitle':'bg-yellowTitle'">
              <span class="align-middle text-xl font-bold cursor-pointer text-gray-50 text-white"

             >{{item.title}}</span>
            </li>
          </template>

        </ul>
      </div>
    </div>
    </div>

    <!--    模块三-->
    <div class="my-16 text-center font-bold text-4xl text-navy-600">
      <div>微梦创新打造 "一条流程两个业务模式"</div>
      <div class="flex m-10 pb-10" data-aos="fade-up">
        <div class="w-1/3 shadow-elementBox rounded-3xl mx-5"  data-aos="fade-up">
          <div class="rounded-3xl p-10 flex flex-col items-center">
          <img :src="kaifa" />
            <p class="text-2xl my-5">快速开发搭建</p>
            <p class="text-lg">
              我们可以快速搭建营销项目、小程序项目、极大的节省客户时间成本、并且抢占商机
            </p>
          </div>
        </div>
        <div class="w-1/3 shadow-elementBox rounded-3xl mx-5"  data-aos="fade-up">
          <div class="rounded-3xl p-10 flex flex-col items-center">
            <img :src="ai2" />
            <p class="text-2xl my-5">AI人工智能数据整理</p>
            <p class="text-lg">
              将AI人工智能技术融入项目中，更快的获取行业数据并分析，锁定用户痛点，获取人群画像
            </p>
          </div>
        </div>
        <div class="w-1/3 shadow-elementBox rounded-3xl mx-5" data-aos="fade-up">
          <div class="rounded-3xl p-10 flex flex-col items-center">
            <img :src="jingzhun" />
            <p class="text-2xl my-5">数据分析</p>
            <p class="text-lg">
              对大数据进行清洗后得到行业数据，总结或预测流量动向，及时调整降低获客成本
            </p>
          </div>
        </div>
      </div>
      <div class="flex m-10 pb-10">
        <div class="w-1/3 shadow-elementBox rounded-3xl mx-5 "  data-aos="fade-up">
          <div class="rounded-3xl p-10 flex flex-col items-center pt-16">
            <img :src="renqun" />
            <p class="text-2xl my-5">安全稳定的服务</p>
            <p class="text-lg">
              注重客户的行业数据安全，不会向同类目泄露相关数据和行业隐私，服务透明，受行业监督
            </p>
          </div>
        </div>
        <div class="w-1/3 shadow-elementBox rounded-3xl mx-5"  data-aos="fade-up">
          <div class="rounded-3xl p-10 flex flex-col items-center">
            <img :src="yewu" />
            <p class="text-2xl my-5">多种业务组合</p>
            <p class="text-lg">
              以整合营销的方式，将小程序、网站、付费流量整合到自有平台上来，让回头客的成本为0
            </p>
          </div>
        </div>
        <div class="w-1/3 shadow-elementBox rounded-3xl mx-5"  data-aos="fade-up">
          <div class="rounded-3xl p-10 flex flex-col items-center">
            <img :src="shouru" />
            <p class="text-2xl my-5">更稳定的收入</p>
            <p class="text-lg">
              让商家更加专注于产品，扩大品牌效力，让"回头客"更多
            </p>
          </div>
        </div>
      </div>
    </div>

<!--    <div><chart></chart></div>-->
    <!--    模块四-->
    <div
      class="py-14 text-center font-bold text-4xl text-navy-600 bg-home-image2 bg-no-repeat bg-center bg-cover"
    >
      <div>微梦创新的服务</div>
      <div class="font-extralight text-lg my-10">
        微梦创新创立之初就决定，<span class="underline">用专业的知识服务于客户</span>，因为项目的利润对上下游客户可见，从而促使微梦创新以技术创造收益的商业模式；<br />认认真真服务于自己的每一个客户。
      </div>
      <div class="flex">
        <div class="text-lg w-1/3 px-5" data-aos="fade-up">
          <img
            class="shadow-elementBox p-10 rounded-2xl mx-auto bg-white"
            :src="shangxiayou"
          />
          <p class="my-5">服务于上下游</p>
          <p class="font-extralight">
            微梦创新是一家软件服务商，因此有自己的上下游，微梦创新不仅对自己客户负责更会对上下游负责
          </p>
        </div>
        <div class="text-lg w-1/3 px-5" data-aos="fade-up">
          <img
            class="shadow-elementBox p-10 rounded-2xl mx-auto bg-white"
            :src="gongkai"
          />
          <p class="my-5">公开透明</p>
          <p class="font-extralight">
            微梦创新的利润对任何客户公开，受客户的监督；并对项目技术点也向客户公开，促使企业用技术服务创造收益
          </p>
        </div>
        <div class="text-lg w-1/3 px-5" data-aos="fade-up">
          <img
            class="shadow-elementBox p-10 rounded-2xl mx-auto bg-white"
            :src="kecha"
          />
          <p class="my-5">服务可查</p>
          <p class="font-extralight">
            微梦创新会对每一个客户建立专属的档案，任何环节的服务细节都有迹可查
          </p>
        </div>
      </div>
      <div class="flex my-10">
        <div class="text-lg w-1/3 px-5" data-aos="fade-up">
          <img
            class="shadow-elementBox p-10 rounded-2xl mx-auto bg-white"
            :src="Advanced_Segmentation"
          />
          <p class="my-5">技术优先</p>
          <p class="font-extralight">
            微梦创新的的业务部每2周会向技术部提出新建设性需求，每3周技术部会将新的需求落地，随后经过验证和测试后，业务软件和服务随即更新
          </p>
        </div>
        <div class="text-lg w-1/3 px-5" data-aos="fade-up">
          <img
            class="shadow-elementBox p-10 rounded-2xl mx-auto bg-white"
            :src="Enriched_Accounts___Contacts"
          />
          <p class="my-5">服务优先</p>
          <p class="font-extralight">
            微梦创新坚信专业的知识是服务客户的根本，每周都有相关部门对客户需求进行回访跟踪，解决问题
          </p>
        </div>
        <div class="text-lg w-1/3 px-5" data-aos="fade-up">
          <img
            class="shadow-elementBox p-10 rounded-2xl mx-auto bg-white"
            :src="Optimized_Web_Forms"
          />
          <p class="my-5">分享优先</p>
          <p class="font-extralight">
            微梦创新会定期与客户分享一些技术、运营经验，以便更好的做好技术服务
          </p>
        </div>
      </div>
      <div class="flex my-10">
        <div class="text-lg w-1/3 px-5" data-aos="fade-up">
          <img
            class="shadow-elementBox p-10 rounded-2xl mx-auto bg-white"
            :src="Precise_B2B_Ad_Targeting"
          />
          <p class="my-5">营销服务</p>
          <p class="font-extralight">
            微梦创新为了提供更合适的营销服务，业务部人员会在客户驻厂两周，实地学习和体验相关产品的买卖过程，以便为线上营销方案的制定明确思路
          </p>
        </div>
        <div class="text-lg w-1/3 px-5" data-aos="fade-up">
          <img
            class="shadow-elementBox p-10 rounded-2xl mx-auto bg-white"
            :src="Instant_Sales_Alerts"
          />
          <p class="my-5">技术外包服务</p>
          <p class="font-extralight">
            微梦创新目前只提供技术外包服务，会根据客户的明确需求制定详细的开发可行性报告，开发过程中完善相关接口文档和功能维护手册，大幅度降低客户后期维护成本
          </p>
        </div>
      </div>
    </div>
    <!--  模块五  -->
    <div class="container flex pt-10">
      <div
        class="rounded-2xl element-shadow-3 md:order-1 md:mx-0 max-w-xl p-4 mx-auto bg-white"
      >
        <div
          class="contact-component relative bg-gray-0 min-h-[30rem] border border-gray-200 rounded flex flex-col pt-10 pb-6 px-6 md:px-10 lg:px-12 max-w-xl"
          data-aos="fade-up"
        >
          <form>
            <header class="text-[#2C303E] text-center">
              <img class="w-10 mx-auto" :src="logo" />
              <h3 class="font-eina mb-6 text-2xl font-semibold">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >与微梦创新联系</font
                  ></font
                >
              </h3>
            </header>
            <div>
              <label
                class="row block overflow-hidden text-left flex flex-col flex-wrap flex-auto opacity-100 mb-5"
                data-test="email"
                ><span class="text-navy-400 mb-2 text-sm font-semibold"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">电子邮件</font></font
                  ></span
                ><input
                  class="appearance-none block bg-white flex-auto rounded-sm outline-none px-3 md:px-5 h-12 text-sm font-medium border border-gray-200 focus:border-blue-500 placeholder-gray-400 font-eina"
                  type="email"
                  name="email"
                  placeholder="you@company-email.com"
                  pattern="^(?!.*(gmail|hotmail|yahoo)).*$"
                  required=""
                  value="" /></label
              ><label
                class="row block overflow-hidden text-left flex flex-col flex-wrap flex-auto opacity-0 h-0"
                data-test="name"
                ><span class="text-navy-400 mb-2 text-sm font-semibold"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">姓名</font></font
                  ></span
                ><input
                  class="appearance-none block bg-white flex-auto rounded-sm outline-none px-3 md:px-5 h-12 text-sm font-medium border border-gray-200 focus:border-blue-500 placeholder-gray-400 font-eina"
                  type="text"
                  name="name"
                  placeholder="你的名字"
                  data-hj-whitelist="true"
                  disabled=""
                  value="" /></label
              ><label
                class="row block overflow-hidden text-left flex flex-col flex-wrap flex-auto opacity-0 h-0"
                data-test="title"
                ><span class="text-navy-400 mb-2 text-sm font-semibold"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">标题</font></font
                  ></span
                ><input
                  class="appearance-none block bg-white flex-auto rounded-sm outline-none px-3 md:px-5 h-12 text-sm font-medium border border-gray-200 focus:border-blue-500 placeholder-gray-400 font-eina"
                  type="text"
                  name="title"
                  placeholder="副总裁"
                  data-hj-whitelist="true"
                  disabled=""
                  value="" /></label
              ><label
                class="row block overflow-hidden text-left flex flex-col flex-wrap flex-auto opacity-100 mb-5"
                data-test="message"
                ><span class="text-navy-400 mb-2 text-sm font-semibold"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">信息</font></font
                  ></span
                ><textarea
                  name="message"
                  class="resize-y w-full py-3 appearance-none block bg-white flex-auto rounded-sm outline-none px-3 md:px-5 text-sm font-medium border border-gray-200 focus:border-blue-500 placeholder-gray-400 font-eina"
                  rows="3"
                  placeholder="您希望通过 微梦创新 完成什么？"
                  required=""
                  data-hj-whitelist="true"
                ></textarea></label
              ><label
                class="row block overflow-hidden text-left flex flex-col flex-wrap flex-auto opacity-100 mb-5"
                data-test="attribution"
                ><span class="text-navy-400 mb-2 text-sm font-semibold"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >你是怎么知道我们的？</font
                    ><font style="vertical-align: inherit"
                      >（选修的）</font
                    ></font
                  ></span
                ><input
                  class="appearance-none block bg-white flex-auto rounded-sm outline-none px-3 md:px-5 h-12 text-sm font-medium border border-gray-200 focus:border-blue-500 placeholder-gray-400 font-eina"
                  type="text"
                  name="attribution"
                  data-hj-whitelist="true"
                  value=""
              /></label>
            </div>
            <footer
              class="md:flex-row flex flex-col-reverse items-center justify-between"
            >
              <div class="w-full">
                <button
                  type="submit"
                  class="ck-button-new ck-button-new--bold--blue-f ck-button-new--small w-full"
                >
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">免费咨询</font></font
                  >
                </button>
                <p class="mt-3 text-sm">
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >要了解 微梦创新 如何处理您的信息，请参阅我们的</font
                    ><a
                      target="_blank"
                      class="hover:opacity-75 text-navy-400 border-navy-400 whitespace-nowrap font-semibold underline"
                      href="/privacy"
                      ><font style="vertical-align: inherit">隐私政策</font></a
                    ><font style="vertical-align: inherit">。</font></font
                  >
                  <a
                    target="_blank"
                    class="hover:opacity-75 text-navy-400 border-navy-400 whitespace-nowrap font-semibold underline"
                    href="/privacy"
                    ><font style="vertical-align: inherit"></font></a
                  ><font style="vertical-align: inherit"></font>
                </p>
              </div>
            </footer>
          </form>
        </div>
        <div class="md:hidden my-4">
          <div
            class="justify-evenly md:justify-start gap-x-6 font-eina lg:text-md flex text-sm text-center text-gray-800"
          >
            <div
              class="flex flex-col items-center w-[23%] md:w-[25%] max-w-[7rem] lg:max-w-[8.5rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 94 122"
                width="100%"
              >
                <path
                  fill="#fff"
                  d="M8.1 89.9 47.6 110l38-20.1V11.3H8.1z"
                ></path>
                <path
                  fill="#f2f3f2"
                  d="M86.4 11.6 7.3 91.3l41 20.3 38.1-19.5z"
                ></path>
                <path
                  fill="#dcdedc"
                  d="M5.5 37.5v54.1l1.4.7 39.5 20.1 1.2.6 1.2-.6 38.1-20.1 1.4-.7V8.7H5.5v28.8zm2.6 52.6V11.3h77.6v78.8l-38.1 20.1L8.1 90.1z"
                ></path>
                <path
                  fill="#ff492c"
                  d="M46.9 12.6c.4 0 .8 0 1.2.1L46.9 15c-1.8-.1-3.4 1.3-3.5 3.1-.1 1.8 1.3 3.4 3.1 3.5h.4c.8 0 1.6-.3 2.2-.8l1.3 2.2c-1 .7-2.2 1.1-3.5 1.1-3.2.1-5.9-2.3-6-5.5-.1-3.2 2.3-5.9 5.5-6h.5zm4.1 4.9 1.5 2.5-1.5 2.4-1.4-2.4h-2.9l1.5-2.5H51zm-2.4-.9c0-.4.1-.8.3-1.1.2-.3.6-.6.9-.8l.2-.1c.4-.2.5-.3.5-.5s-.3-.4-.5-.4c-.4 0-.7.2-.9.6l-.5-.5c.1-.2.3-.4.5-.6.3-.2.6-.2.9-.2.3 0 .7.1.9.3.2.2.4.5.4.8 0 .5-.3.9-.9 1.1l-.3.2c-.3.2-.5.3-.6.6h1.8v.7l-2.7-.1zm-1.7 12.5 9.5-5.4v-15H37.3v14.9l9.6 5.5zM90.2 64.5H3.6l-3.2 7 3.2 7h86.6l3.1-7z"
                ></path>
                <path
                  fill="#252530"
                  d="M19.09 60q-.09 0-.15-.06-.06-.07-.06-.16V47.62q0-.09.06-.16.06-.06.15-.06h2.11q.09 0 .15.06.07.07.07.16v10.11q0 .09.09.09h5.88q.09 0 .16.06.06.07.06.16v1.74q0 .09-.06.16-.07.06-.16.06h-8.3Zm18.11-5.58q.11.68.07 1.53-.01.22-.23.22h-5.56q-.11 0-.07.09.05.36.19.72.47 1 1.91 1 1.15-.01 1.82-.93.07-.11.16-.11.06 0 .13.07l1.29 1.28q.09.09.09.16 0 .04-.07.15-.59.73-1.53 1.14-.93.4-2.05.4-1.55 0-2.62-.7t-1.54-1.96q-.38-.9-.38-2.36 0-.99.27-1.74.42-1.28 1.45-2.04 1.04-.75 2.46-.75 1.8 0 2.89 1.04t1.32 2.79Zm-4.19-1.64q-1.14 0-1.5 1.06-.07.24-.12.58 0 .09.09.09h3.11q.11 0 .07-.09-.09-.52-.09-.5-.16-.54-.56-.84-.41-.3-1-.3Zm9.43-2.18q1.17 0 2.09.41.92.4 1.43 1.11.51.7.51 1.56v6.1q0 .09-.06.16-.06.06-.15.06h-2.11q-.09 0-.15-.06-.07-.07-.07-.16v-.59q0-.05-.03-.07-.04-.02-.07.03-.76.99-2.43.99-1.41 0-2.27-.68-.87-.68-.87-2.02 0-1.38.98-2.15.97-.76 2.77-.76h1.83q.09 0 .09-.09v-.4q0-.59-.36-.93-.36-.33-1.08-.33-.55 0-.92.2t-.48.56q-.05.2-.23.18l-2.18-.29q-.22-.04-.2-.16.07-.76.6-1.37.53-.61 1.41-.95.87-.35 1.95-.35Zm-.36 7.65q.77 0 1.31-.41t.54-1.06v-.65q0-.09-.09-.09h-1.29q-.81 0-1.27.31-.46.3-.46.86 0 .49.34.76.34.28.92.28ZM54 47.62q0-.09.06-.16.06-.06.15-.06h2.11q.09 0 .15.06.06.07.06.16v12.16q0 .09-.06.16-.06.06-.15.06h-2.11q-.09 0-.15-.06-.06-.07-.06-.16v-.59q0-.05-.04-.06-.04-.01-.07.02-.76.99-2.07.99-1.26 0-2.17-.7-.91-.7-1.31-1.92-.3-.94-.3-2.18 0-1.28.32-2.23.42-1.16 1.31-1.83.89-.68 2.2-.68 1.3 0 2.02.9.03.06.07.04.04-.02.04-.07v-3.85Zm-.38 9.57q.36-.66.36-1.82 0-1.2-.4-1.89-.41-.7-1.2-.7-.85 0-1.28.7-.45.71-.45 1.91 0 1.08.38 1.8.45.78 1.33.78.81 0 1.26-.78Zm13.01-2.77q.11.68.07 1.53-.01.22-.23.22h-5.56q-.11 0-.07.09.05.36.19.72.47 1 1.91 1 1.15-.01 1.82-.93.07-.11.16-.11.06 0 .13.07l1.29 1.28q.09.09.09.16 0 .04-.07.15-.59.73-1.53 1.14-.93.4-2.05.4-1.55 0-2.62-.7t-1.54-1.96q-.38-.9-.38-2.36 0-.99.27-1.74.42-1.28 1.45-2.04 1.04-.75 2.46-.75 1.8 0 2.89 1.04t1.32 2.79Zm-4.19-1.64q-1.14 0-1.5 1.06-.07.24-.12.58 0 .09.09.09h3.11q.11 0 .07-.09-.09-.52-.09-.5-.16-.54-.56-.84-.41-.3-1-.3Zm10.44-2.16q.65 0 1.02.25.15.08.11.27l-.38 2.06q-.01.21-.25.12-.27-.09-.63-.09-.14 0-.39.04-.65.05-1.1.47-.45.43-.45 1.13v4.91q0 .09-.06.16-.07.06-.16.06h-2.1q-.09 0-.16-.06-.06-.07-.06-.16v-8.82q0-.09.06-.15.07-.06.16-.06h2.1q.09 0 .16.06.06.06.06.15v.69q0 .05.03.07.04.02.06-.02.74-1.08 1.98-1.08Z"
                ></path>
                <path
                  fill="#fff"
                  d="M40.46 69.28q0 .05-.04.08-.03.04-.08.04h-3.4q-.05 0-.05.05v1.87q0 .05.05.05h2.29q.05 0 .09.03.03.04.03.09v.76q0 .05-.03.09-.04.03-.09.03h-2.29q-.05 0-.05.05v2.86q0 .05-.04.08-.03.04-.08.04h-.92q-.05 0-.08-.04-.04-.03-.04-.08v-6.76q0-.05.04-.08.03-.04.08-.04h4.49q.05 0 .08.04.04.03.04.08v.76Zm4.56 6.12q-.1 0-.13-.1l-.33-1.07q-.02-.04-.05-.04h-2.64q-.03 0-.05.04l-.33 1.07q-.03.1-.13.1h-1q-.06 0-.09-.04-.03-.03-.01-.1l2.17-6.76q.03-.1.13-.1h1.25q.1 0 .13.1l2.18 6.76q.01.02.01.05 0 .09-.11.09h-1Zm-2.89-2.18q-.01.06.04.06h2.03q.06 0 .04-.06l-1.03-3.35q-.01-.04-.03-.04-.02 0-.03.04l-1.02 3.35Zm5.15 2.18q-.05 0-.08-.04-.04-.03-.04-.08v-6.76q0-.05.04-.08.03-.04.08-.04h.92q.05 0 .09.04.03.03.03.08v5.83q0 .05.05.05h3.35q.05 0 .08.04.04.03.04.08v.76q0 .05-.04.08-.03.04-.08.04h-4.44Zm5.71 0q-.05 0-.08-.04-.04-.03-.04-.08v-6.76q0-.05.04-.08.03-.04.08-.04h.92q.05 0 .09.04.03.03.03.08v5.83q0 .05.05.05h3.35q.05 0 .09.04.03.03.03.08v.76q0 .05-.03.08-.04.04-.09.04h-4.44Z"
                ></path>
                <path
                  fill="#252530"
                  d="M33.77 93.46q-.03.03-.02.06.02.03.06.03h3.93q.07 0 .12.05.06.05.06.12v1.41q0 .07-.06.12-.05.05-.12.05h-6.52q-.08 0-.13-.05t-.05-.12v-1.34q0-.13.09-.22.71-.69 1.45-1.51.74-.82.93-1.02.4-.48.82-.92 1.32-1.46 1.32-2.17 0-.51-.36-.84-.36-.32-.94-.32t-.94.32q-.37.33-.37.87v.36q0 .07-.05.12-.05.05-.12.05h-1.71q-.07 0-.12-.05-.06-.05-.06-.12v-.68q.05-.78.5-1.39.45-.6 1.19-.92.75-.32 1.68-.32 1.03 0 1.79.39.76.38 1.17 1.03.42.66.42 1.45 0 .61-.31 1.25-.3.64-.91 1.38-.45.56-.97 1.12-.52.55-1.55 1.59l-.22.22Zm8.86 2q-1.6 0-2.52-.89-.93-.89-.93-2.43v-3.83q0-1.51.93-2.39.92-.89 2.52-.89 1.59 0 2.53.89.93.88.93 2.39v3.83q0 1.54-.93 2.43-.94.89-2.53.89Zm0-1.75q.65 0 1.03-.4.39-.4.39-1.07v-3.99q0-.66-.39-1.06-.38-.4-1.03-.4-.64 0-1.02.4-.39.4-.39 1.06v3.99q0 .67.39 1.07.38.4 1.02.4Zm7.52-.25q-.03.03-.01.06.01.03.06.03h3.93q.07 0 .12.05.05.05.05.12v1.41q0 .07-.05.12-.05.05-.12.05H47.6q-.07 0-.12-.05-.05-.05-.05-.12v-1.34q0-.13.08-.22.72-.69 1.45-1.51.74-.82.93-1.02.41-.48.83-.92 1.32-1.46 1.32-2.17 0-.51-.36-.84-.37-.32-.95-.32t-.94.32q-.36.33-.36.87v.36q0 .07-.05.12-.05.05-.13.05h-1.71q-.07 0-.12-.05-.05-.05-.05-.12v-.68q.04-.78.49-1.39.45-.6 1.2-.92.75-.32 1.67-.32 1.03 0 1.79.39.77.38 1.18 1.03.41.66.41 1.45 0 .61-.3 1.25-.31.64-.92 1.38-.45.56-.97 1.12-.52.55-1.55 1.59l-.22.22Zm8.12 0q-.03.03-.01.06.01.03.06.03h3.93q.07 0 .12.05.05.05.05.12v1.41q0 .07-.05.12-.05.05-.12.05h-6.53q-.07 0-.12-.05-.05-.05-.05-.12v-1.34q0-.13.08-.22.72-.69 1.45-1.51.74-.82.93-1.02.41-.48.83-.92 1.32-1.46 1.32-2.17 0-.51-.36-.84-.37-.32-.95-.32t-.94.32q-.36.33-.36.87v.36q0 .07-.05.12-.05.05-.13.05h-1.71q-.07 0-.12-.05-.05-.05-.05-.12v-.68q.04-.78.49-1.39.45-.6 1.2-.92.75-.32 1.67-.32 1.03 0 1.79.39.77.38 1.18 1.03.41.66.41 1.45 0 .61-.3 1.25-.31.64-.92 1.38-.45.56-.97 1.12-.52.55-1.55 1.59l-.22.22Z"
                ></path>
              </svg>
              <p class="mt-4 mb-0 font-bold">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">市场</font></font
                >
              </p>
              <p class="text-gray-500">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">智力</font></font
                >
              </p>
            </div>
            <div
              class="flex flex-col items-center w-[23%] md:w-[25%] max-w-[7rem] lg:max-w-[8.5rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 94 122"
                width="100%"
              >
                <path
                  fill="#fff"
                  d="M8.1 89.9 47.6 110l38-20.1V11.3H8.1z"
                ></path>
                <path
                  fill="#f2f3f2"
                  d="M86.4 11.6 7.3 91.3l41 20.3 38.1-19.5z"
                ></path>
                <path
                  fill="#dcdedc"
                  d="M5.5 37.5v54.1l1.4.7 39.5 20.1 1.2.6 1.2-.6 38.1-20.1 1.4-.7V8.7H5.5v28.8zm2.6 52.6V11.3h77.6v78.8l-38.1 20.1L8.1 90.1z"
                ></path>
                <path
                  fill="#ff492c"
                  d="M46.9 12.6c.4 0 .8 0 1.2.1L46.9 15c-1.8-.1-3.4 1.3-3.5 3.1-.1 1.8 1.3 3.4 3.1 3.5h.4c.8 0 1.6-.3 2.2-.8l1.3 2.2c-1 .7-2.2 1.1-3.5 1.1-3.2.1-5.9-2.3-6-5.5-.1-3.2 2.3-5.9 5.5-6h.5zm4.1 4.9 1.5 2.5-1.5 2.4-1.4-2.4h-2.9l1.5-2.5H51zm-2.4-.9c0-.4.1-.8.3-1.1.2-.3.6-.6.9-.8l.2-.1c.4-.2.5-.3.5-.5s-.3-.4-.5-.4c-.4 0-.7.2-.9.6l-.5-.5c.1-.2.3-.4.5-.6.3-.2.6-.2.9-.2.3 0 .7.1.9.3.2.2.4.5.4.8 0 .5-.3.9-.9 1.1l-.3.2c-.3.2-.5.3-.6.6h1.8v.7l-2.7-.1zm-1.7 12.5 9.5-5.4v-15H37.3v14.9l9.6 5.5zM90.2 64.5H3.6l-3.2 7 3.2 7h86.6l3.1-7z"
                ></path>
                <path
                  fill="#252530"
                  d="M19.09 60q-.09 0-.15-.06-.06-.07-.06-.16V47.62q0-.09.06-.16.06-.06.15-.06h2.11q.09 0 .15.06.07.07.07.16v10.11q0 .09.09.09h5.88q.09 0 .16.06.06.07.06.16v1.74q0 .09-.06.16-.07.06-.16.06h-8.3Zm18.11-5.58q.11.68.07 1.53-.01.22-.23.22h-5.56q-.11 0-.07.09.05.36.19.72.47 1 1.91 1 1.15-.01 1.82-.93.07-.11.16-.11.06 0 .13.07l1.29 1.28q.09.09.09.16 0 .04-.07.15-.59.73-1.53 1.14-.93.4-2.05.4-1.55 0-2.62-.7t-1.54-1.96q-.38-.9-.38-2.36 0-.99.27-1.74.42-1.28 1.45-2.04 1.04-.75 2.46-.75 1.8 0 2.89 1.04t1.32 2.79Zm-4.19-1.64q-1.14 0-1.5 1.06-.07.24-.12.58 0 .09.09.09h3.11q.11 0 .07-.09-.09-.52-.09-.5-.16-.54-.56-.84-.41-.3-1-.3Zm9.43-2.18q1.17 0 2.09.41.92.4 1.43 1.11.51.7.51 1.56v6.1q0 .09-.06.16-.06.06-.15.06h-2.11q-.09 0-.15-.06-.07-.07-.07-.16v-.59q0-.05-.03-.07-.04-.02-.07.03-.76.99-2.43.99-1.41 0-2.27-.68-.87-.68-.87-2.02 0-1.38.98-2.15.97-.76 2.77-.76h1.83q.09 0 .09-.09v-.4q0-.59-.36-.93-.36-.33-1.08-.33-.55 0-.92.2t-.48.56q-.05.2-.23.18l-2.18-.29q-.22-.04-.2-.16.07-.76.6-1.37.53-.61 1.41-.95.87-.35 1.95-.35Zm-.36 7.65q.77 0 1.31-.41t.54-1.06v-.65q0-.09-.09-.09h-1.29q-.81 0-1.27.31-.46.3-.46.86 0 .49.34.76.34.28.92.28ZM54 47.62q0-.09.06-.16.06-.06.15-.06h2.11q.09 0 .15.06.06.07.06.16v12.16q0 .09-.06.16-.06.06-.15.06h-2.11q-.09 0-.15-.06-.06-.07-.06-.16v-.59q0-.05-.04-.06-.04-.01-.07.02-.76.99-2.07.99-1.26 0-2.17-.7-.91-.7-1.31-1.92-.3-.94-.3-2.18 0-1.28.32-2.23.42-1.16 1.31-1.83.89-.68 2.2-.68 1.3 0 2.02.9.03.06.07.04.04-.02.04-.07v-3.85Zm-.38 9.57q.36-.66.36-1.82 0-1.2-.4-1.89-.41-.7-1.2-.7-.85 0-1.28.7-.45.71-.45 1.91 0 1.08.38 1.8.45.78 1.33.78.81 0 1.26-.78Zm13.01-2.77q.11.68.07 1.53-.01.22-.23.22h-5.56q-.11 0-.07.09.05.36.19.72.47 1 1.91 1 1.15-.01 1.82-.93.07-.11.16-.11.06 0 .13.07l1.29 1.28q.09.09.09.16 0 .04-.07.15-.59.73-1.53 1.14-.93.4-2.05.4-1.55 0-2.62-.7t-1.54-1.96q-.38-.9-.38-2.36 0-.99.27-1.74.42-1.28 1.45-2.04 1.04-.75 2.46-.75 1.8 0 2.89 1.04t1.32 2.79Zm-4.19-1.64q-1.14 0-1.5 1.06-.07.24-.12.58 0 .09.09.09h3.11q.11 0 .07-.09-.09-.52-.09-.5-.16-.54-.56-.84-.41-.3-1-.3Zm10.44-2.16q.65 0 1.02.25.15.08.11.27l-.38 2.06q-.01.21-.25.12-.27-.09-.63-.09-.14 0-.39.04-.65.05-1.1.47-.45.43-.45 1.13v4.91q0 .09-.06.16-.07.06-.16.06h-2.1q-.09 0-.16-.06-.06-.07-.06-.16v-8.82q0-.09.06-.15.07-.06.16-.06h2.1q.09 0 .16.06.06.06.06.15v.69q0 .05.03.07.04.02.06-.02.74-1.08 1.98-1.08Z"
                ></path>
                <path
                  fill="#fff"
                  d="M40.46 69.28q0 .05-.04.08-.03.04-.08.04h-3.4q-.05 0-.05.05v1.87q0 .05.05.05h2.29q.05 0 .09.03.03.04.03.09v.76q0 .05-.03.09-.04.03-.09.03h-2.29q-.05 0-.05.05v2.86q0 .05-.04.08-.03.04-.08.04h-.92q-.05 0-.08-.04-.04-.03-.04-.08v-6.76q0-.05.04-.08.03-.04.08-.04h4.49q.05 0 .08.04.04.03.04.08v.76Zm4.56 6.12q-.1 0-.13-.1l-.33-1.07q-.02-.04-.05-.04h-2.64q-.03 0-.05.04l-.33 1.07q-.03.1-.13.1h-1q-.06 0-.09-.04-.03-.03-.01-.1l2.17-6.76q.03-.1.13-.1h1.25q.1 0 .13.1l2.18 6.76q.01.02.01.05 0 .09-.11.09h-1Zm-2.89-2.18q-.01.06.04.06h2.03q.06 0 .04-.06l-1.03-3.35q-.01-.04-.03-.04-.02 0-.03.04l-1.02 3.35Zm5.15 2.18q-.05 0-.08-.04-.04-.03-.04-.08v-6.76q0-.05.04-.08.03-.04.08-.04h.92q.05 0 .09.04.03.03.03.08v5.83q0 .05.05.05h3.35q.05 0 .08.04.04.03.04.08v.76q0 .05-.04.08-.03.04-.08.04h-4.44Zm5.71 0q-.05 0-.08-.04-.04-.03-.04-.08v-6.76q0-.05.04-.08.03-.04.08-.04h.92q.05 0 .09.04.03.03.03.08v5.83q0 .05.05.05h3.35q.05 0 .09.04.03.03.03.08v.76q0 .05-.03.08-.04.04-.09.04h-4.44Z"
                ></path>
                <path
                  fill="#252530"
                  d="M33.77 93.46q-.03.03-.02.06.02.03.06.03h3.93q.07 0 .12.05.06.05.06.12v1.41q0 .07-.06.12-.05.05-.12.05h-6.52q-.08 0-.13-.05t-.05-.12v-1.34q0-.13.09-.22.71-.69 1.45-1.51.74-.82.93-1.02.4-.48.82-.92 1.32-1.46 1.32-2.17 0-.51-.36-.84-.36-.32-.94-.32t-.94.32q-.37.33-.37.87v.36q0 .07-.05.12-.05.05-.12.05h-1.71q-.07 0-.12-.05-.06-.05-.06-.12v-.68q.05-.78.5-1.39.45-.6 1.19-.92.75-.32 1.68-.32 1.03 0 1.79.39.76.38 1.17 1.03.42.66.42 1.45 0 .61-.31 1.25-.3.64-.91 1.38-.45.56-.97 1.12-.52.55-1.55 1.59l-.22.22Zm8.86 2q-1.6 0-2.52-.89-.93-.89-.93-2.43v-3.83q0-1.51.93-2.39.92-.89 2.52-.89 1.59 0 2.53.89.93.88.93 2.39v3.83q0 1.54-.93 2.43-.94.89-2.53.89Zm0-1.75q.65 0 1.03-.4.39-.4.39-1.07v-3.99q0-.66-.39-1.06-.38-.4-1.03-.4-.64 0-1.02.4-.39.4-.39 1.06v3.99q0 .67.39 1.07.38.4 1.02.4Zm7.52-.25q-.03.03-.01.06.01.03.06.03h3.93q.07 0 .12.05.05.05.05.12v1.41q0 .07-.05.12-.05.05-.12.05H47.6q-.07 0-.12-.05-.05-.05-.05-.12v-1.34q0-.13.08-.22.72-.69 1.45-1.51.74-.82.93-1.02.41-.48.83-.92 1.32-1.46 1.32-2.17 0-.51-.36-.84-.37-.32-.95-.32t-.94.32q-.36.33-.36.87v.36q0 .07-.05.12-.05.05-.13.05h-1.71q-.07 0-.12-.05-.05-.05-.05-.12v-.68q.04-.78.49-1.39.45-.6 1.2-.92.75-.32 1.67-.32 1.03 0 1.79.39.77.38 1.18 1.03.41.66.41 1.45 0 .61-.3 1.25-.31.64-.92 1.38-.45.56-.97 1.12-.52.55-1.55 1.59l-.22.22Zm8.12 0q-.03.03-.01.06.01.03.06.03h3.93q.07 0 .12.05.05.05.05.12v1.41q0 .07-.05.12-.05.05-.12.05h-6.53q-.07 0-.12-.05-.05-.05-.05-.12v-1.34q0-.13.08-.22.72-.69 1.45-1.51.74-.82.93-1.02.41-.48.83-.92 1.32-1.46 1.32-2.17 0-.51-.36-.84-.37-.32-.95-.32t-.94.32q-.36.33-.36.87v.36q0 .07-.05.12-.05.05-.13.05h-1.71q-.07 0-.12-.05-.05-.05-.05-.12v-.68q.04-.78.49-1.39.45-.6 1.2-.92.75-.32 1.67-.32 1.03 0 1.79.39.77.38 1.18 1.03.41.66.41 1.45 0 .61-.3 1.25-.31.64-.92 1.38-.45.56-.97 1.12-.52.55-1.55 1.59l-.22.22Z"
                ></path>
              </svg>
              <p class="mt-4 mb-0 font-bold">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">销售量</font></font
                >
              </p>
              <p class="text-gray-500">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">智力</font></font
                >
              </p>
            </div>
            <div
              class="flex flex-col items-center w-[23%] md:w-[25%] max-w-[7rem] lg:max-w-[8.5rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 94 122"
                width="100%"
              >
                <path
                  fill="#fff"
                  d="M8.1 89.9 47.6 110l38-20.1V11.3H8.1z"
                ></path>
                <path
                  fill="#f2f3f2"
                  d="M86.4 11.6 7.3 91.3l41 20.3 38.1-19.5z"
                ></path>
                <path
                  fill="#dcdedc"
                  d="M5.5 37.5v54.1l1.4.7 39.5 20.1 1.2.6 1.2-.6 38.1-20.1 1.4-.7V8.7H5.5v28.8zm2.6 52.6V11.3h77.6v78.8l-38.1 20.1L8.1 90.1z"
                ></path>
                <path
                  fill="#ff492c"
                  d="M46.9 12.6c.4 0 .8 0 1.2.1L46.9 15c-1.8-.1-3.4 1.3-3.5 3.1-.1 1.8 1.3 3.4 3.1 3.5h.4c.8 0 1.6-.3 2.2-.8l1.3 2.2c-1 .7-2.2 1.1-3.5 1.1-3.2.1-5.9-2.3-6-5.5-.1-3.2 2.3-5.9 5.5-6h.5zm4.1 4.9 1.5 2.5-1.5 2.4-1.4-2.4h-2.9l1.5-2.5H51zm-2.4-.9c0-.4.1-.8.3-1.1.2-.3.6-.6.9-.8l.2-.1c.4-.2.5-.3.5-.5s-.3-.4-.5-.4c-.4 0-.7.2-.9.6l-.5-.5c.1-.2.3-.4.5-.6.3-.2.6-.2.9-.2.3 0 .7.1.9.3.2.2.4.5.4.8 0 .5-.3.9-.9 1.1l-.3.2c-.3.2-.5.3-.6.6h1.8v.7l-2.7-.1zm-1.7 12.5 9.5-5.4v-15H37.3v14.9l9.6 5.5zM90.2 64.5H3.6l-3.2 7 3.2 7h86.6l3.1-7z"
                ></path>
                <path
                  fill="#252530"
                  d="M19.09 60q-.09 0-.15-.06-.06-.07-.06-.16V47.62q0-.09.06-.16.06-.06.15-.06h2.11q.09 0 .15.06.07.07.07.16v10.11q0 .09.09.09h5.88q.09 0 .16.06.06.07.06.16v1.74q0 .09-.06.16-.07.06-.16.06h-8.3Zm18.11-5.58q.11.68.07 1.53-.01.22-.23.22h-5.56q-.11 0-.07.09.05.36.19.72.47 1 1.91 1 1.15-.01 1.82-.93.07-.11.16-.11.06 0 .13.07l1.29 1.28q.09.09.09.16 0 .04-.07.15-.59.73-1.53 1.14-.93.4-2.05.4-1.55 0-2.62-.7t-1.54-1.96q-.38-.9-.38-2.36 0-.99.27-1.74.42-1.28 1.45-2.04 1.04-.75 2.46-.75 1.8 0 2.89 1.04t1.32 2.79Zm-4.19-1.64q-1.14 0-1.5 1.06-.07.24-.12.58 0 .09.09.09h3.11q.11 0 .07-.09-.09-.52-.09-.5-.16-.54-.56-.84-.41-.3-1-.3Zm9.43-2.18q1.17 0 2.09.41.92.4 1.43 1.11.51.7.51 1.56v6.1q0 .09-.06.16-.06.06-.15.06h-2.11q-.09 0-.15-.06-.07-.07-.07-.16v-.59q0-.05-.03-.07-.04-.02-.07.03-.76.99-2.43.99-1.41 0-2.27-.68-.87-.68-.87-2.02 0-1.38.98-2.15.97-.76 2.77-.76h1.83q.09 0 .09-.09v-.4q0-.59-.36-.93-.36-.33-1.08-.33-.55 0-.92.2t-.48.56q-.05.2-.23.18l-2.18-.29q-.22-.04-.2-.16.07-.76.6-1.37.53-.61 1.41-.95.87-.35 1.95-.35Zm-.36 7.65q.77 0 1.31-.41t.54-1.06v-.65q0-.09-.09-.09h-1.29q-.81 0-1.27.31-.46.3-.46.86 0 .49.34.76.34.28.92.28ZM54 47.62q0-.09.06-.16.06-.06.15-.06h2.11q.09 0 .15.06.06.07.06.16v12.16q0 .09-.06.16-.06.06-.15.06h-2.11q-.09 0-.15-.06-.06-.07-.06-.16v-.59q0-.05-.04-.06-.04-.01-.07.02-.76.99-2.07.99-1.26 0-2.17-.7-.91-.7-1.31-1.92-.3-.94-.3-2.18 0-1.28.32-2.23.42-1.16 1.31-1.83.89-.68 2.2-.68 1.3 0 2.02.9.03.06.07.04.04-.02.04-.07v-3.85Zm-.38 9.57q.36-.66.36-1.82 0-1.2-.4-1.89-.41-.7-1.2-.7-.85 0-1.28.7-.45.71-.45 1.91 0 1.08.38 1.8.45.78 1.33.78.81 0 1.26-.78Zm13.01-2.77q.11.68.07 1.53-.01.22-.23.22h-5.56q-.11 0-.07.09.05.36.19.72.47 1 1.91 1 1.15-.01 1.82-.93.07-.11.16-.11.06 0 .13.07l1.29 1.28q.09.09.09.16 0 .04-.07.15-.59.73-1.53 1.14-.93.4-2.05.4-1.55 0-2.62-.7t-1.54-1.96q-.38-.9-.38-2.36 0-.99.27-1.74.42-1.28 1.45-2.04 1.04-.75 2.46-.75 1.8 0 2.89 1.04t1.32 2.79Zm-4.19-1.64q-1.14 0-1.5 1.06-.07.24-.12.58 0 .09.09.09h3.11q.11 0 .07-.09-.09-.52-.09-.5-.16-.54-.56-.84-.41-.3-1-.3Zm10.44-2.16q.65 0 1.02.25.15.08.11.27l-.38 2.06q-.01.21-.25.12-.27-.09-.63-.09-.14 0-.39.04-.65.05-1.1.47-.45.43-.45 1.13v4.91q0 .09-.06.16-.07.06-.16.06h-2.1q-.09 0-.16-.06-.06-.07-.06-.16v-8.82q0-.09.06-.15.07-.06.16-.06h2.1q.09 0 .16.06.06.06.06.15v.69q0 .05.03.07.04.02.06-.02.74-1.08 1.98-1.08Z"
                ></path>
                <path
                  fill="#fff"
                  d="M40.46 69.28q0 .05-.04.08-.03.04-.08.04h-3.4q-.05 0-.05.05v1.87q0 .05.05.05h2.29q.05 0 .09.03.03.04.03.09v.76q0 .05-.03.09-.04.03-.09.03h-2.29q-.05 0-.05.05v2.86q0 .05-.04.08-.03.04-.08.04h-.92q-.05 0-.08-.04-.04-.03-.04-.08v-6.76q0-.05.04-.08.03-.04.08-.04h4.49q.05 0 .08.04.04.03.04.08v.76Zm4.56 6.12q-.1 0-.13-.1l-.33-1.07q-.02-.04-.05-.04h-2.64q-.03 0-.05.04l-.33 1.07q-.03.1-.13.1h-1q-.06 0-.09-.04-.03-.03-.01-.1l2.17-6.76q.03-.1.13-.1h1.25q.1 0 .13.1l2.18 6.76q.01.02.01.05 0 .09-.11.09h-1Zm-2.89-2.18q-.01.06.04.06h2.03q.06 0 .04-.06l-1.03-3.35q-.01-.04-.03-.04-.02 0-.03.04l-1.02 3.35Zm5.15 2.18q-.05 0-.08-.04-.04-.03-.04-.08v-6.76q0-.05.04-.08.03-.04.08-.04h.92q.05 0 .09.04.03.03.03.08v5.83q0 .05.05.05h3.35q.05 0 .08.04.04.03.04.08v.76q0 .05-.04.08-.03.04-.08.04h-4.44Zm5.71 0q-.05 0-.08-.04-.04-.03-.04-.08v-6.76q0-.05.04-.08.03-.04.08-.04h.92q.05 0 .09.04.03.03.03.08v5.83q0 .05.05.05h3.35q.05 0 .09.04.03.03.03.08v.76q0 .05-.03.08-.04.04-.09.04h-4.44Z"
                ></path>
                <path
                  fill="#252530"
                  d="M33.77 93.46q-.03.03-.02.06.02.03.06.03h3.93q.07 0 .12.05.06.05.06.12v1.41q0 .07-.06.12-.05.05-.12.05h-6.52q-.08 0-.13-.05t-.05-.12v-1.34q0-.13.09-.22.71-.69 1.45-1.51.74-.82.93-1.02.4-.48.82-.92 1.32-1.46 1.32-2.17 0-.51-.36-.84-.36-.32-.94-.32t-.94.32q-.37.33-.37.87v.36q0 .07-.05.12-.05.05-.12.05h-1.71q-.07 0-.12-.05-.06-.05-.06-.12v-.68q.05-.78.5-1.39.45-.6 1.19-.92.75-.32 1.68-.32 1.03 0 1.79.39.76.38 1.17 1.03.42.66.42 1.45 0 .61-.31 1.25-.3.64-.91 1.38-.45.56-.97 1.12-.52.55-1.55 1.59l-.22.22Zm8.86 2q-1.6 0-2.52-.89-.93-.89-.93-2.43v-3.83q0-1.51.93-2.39.92-.89 2.52-.89 1.59 0 2.53.89.93.88.93 2.39v3.83q0 1.54-.93 2.43-.94.89-2.53.89Zm0-1.75q.65 0 1.03-.4.39-.4.39-1.07v-3.99q0-.66-.39-1.06-.38-.4-1.03-.4-.64 0-1.02.4-.39.4-.39 1.06v3.99q0 .67.39 1.07.38.4 1.02.4Zm7.52-.25q-.03.03-.01.06.01.03.06.03h3.93q.07 0 .12.05.05.05.05.12v1.41q0 .07-.05.12-.05.05-.12.05H47.6q-.07 0-.12-.05-.05-.05-.05-.12v-1.34q0-.13.08-.22.72-.69 1.45-1.51.74-.82.93-1.02.41-.48.83-.92 1.32-1.46 1.32-2.17 0-.51-.36-.84-.37-.32-.95-.32t-.94.32q-.36.33-.36.87v.36q0 .07-.05.12-.05.05-.13.05h-1.71q-.07 0-.12-.05-.05-.05-.05-.12v-.68q.04-.78.49-1.39.45-.6 1.2-.92.75-.32 1.67-.32 1.03 0 1.79.39.77.38 1.18 1.03.41.66.41 1.45 0 .61-.3 1.25-.31.64-.92 1.38-.45.56-.97 1.12-.52.55-1.55 1.59l-.22.22Zm8.12 0q-.03.03-.01.06.01.03.06.03h3.93q.07 0 .12.05.05.05.05.12v1.41q0 .07-.05.12-.05.05-.12.05h-6.53q-.07 0-.12-.05-.05-.05-.05-.12v-1.34q0-.13.08-.22.72-.69 1.45-1.51.74-.82.93-1.02.41-.48.83-.92 1.32-1.46 1.32-2.17 0-.51-.36-.84-.37-.32-.95-.32t-.94.32q-.36.33-.36.87v.36q0 .07-.05.12-.05.05-.13.05h-1.71q-.07 0-.12-.05-.05-.05-.05-.12v-.68q.04-.78.49-1.39.45-.6 1.2-.92.75-.32 1.67-.32 1.03 0 1.79.39.77.38 1.18 1.03.41.66.41 1.45 0 .61-.3 1.25-.31.64-.92 1.38-.45.56-.97 1.12-.52.55-1.55 1.59l-.22.22Z"
                ></path>
              </svg>
              <p class="mt-4 mb-0 font-bold">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">带领</font></font
                >
              </p>
              <p class="text-gray-500">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">智力</font></font
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/3 shadow-elementBox" data-aos="fade-right"><img  :src="wechart" /></div>

    </div>
  </div>
</template>

<script setup>
import chart from "./echarts/index.vue"
import wechart from "../../assets/homeimage/WechatIMG3513.png";
import logo from "../../assets/homeimage/logo.svg";
import shangxiayou from "../../assets/homeimage/Enhanced_Ad_Performance.svg";
import gongkai from "../../assets/homeimage/Dynamic_Web_Content.svg";
import kecha from "../../assets/homeimage/Data-driven_Prospecting.svg";
import shouru from "../../assets/homeimage/shouru.png";
import renqun from "../../assets/homeimage/renqun.png";
import yewu from "../../assets/homeimage/yewu.png";
import kaifa from "../../assets/homeimage/kaifa.png";
import ai2 from "../../assets/homeimage/ai2.png";
import Advanced_Segmentation from "../../assets/homeimage/Advanced_Segmentation.svg";
import Enriched_Accounts___Contacts from "../../assets/homeimage/Enriched_Accounts___Contacts.svg";
import Optimized_Web_Forms from "../../assets/homeimage/Optimized_Web_Forms.svg";
import Precise_B2B_Ad_Targeting from "../../assets/homeimage/Precise_B2B_Ad_Targeting.svg";
import Instant_Sales_Alerts from "../../assets/homeimage/Instant_Sales_Alerts.svg";
import jingzhun from "../../assets/homeimage/jingzhun.png";
import tongdian from "../../assets/homeimage/tongdian.png";
import digitization1 from "../../assets/homeimage/4_digitization1.png";
import tradition1 from "../../assets/homeimage/4_tradition1.png";


const listTitle=[
  {title:"渠道有限客户少，获客难度大，流量不精准？"},
  {title:"企业转型推广难，传统行业不懂网络营销，效果难把控？"},
  {title:"网络推广效果差市场竞争激励，销量难打开？"},
  {title:"盲目投放成本高担心费用不可控，怕花冤枉钱？"},
  {title:"做小程序价格高，用模版满足不了需求？"},
  {title:"公司做项目，项目人手不够？再招员工人力成本高？"},
  {title:"想打造自己的专属官网，不知道如何入手？"},
]
</script>

<style scoped>
.buju {
  height: 600px;
}
.ck-button-new--bold--blue {
  height: 3.5rem;
  width: 14rem;
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
  position: relative;
  top: 208px;
}
.ck-button-new--bold--blue-f {
  height: 3.5rem;
  width: 14rem;
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
</style>
