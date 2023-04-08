import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
// import "animate.css"; //动画库
import "wowjs/css/libs/animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
// aos动画库
const appAOS = new AOS.init({
  easing: "ease-in-out",
  duration: 1500,
  anchor: "center-center",
  delay: 300,
});
const app = createApp(App);
app.use(appAOS);
createApp(App).use(router).mount("#app");
