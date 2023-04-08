<template>

  <transition name="fade">
    <div
        class="fixed z-50 my-3 container mx-auto element-shadow lg:rounded-2xl
        absolute top-[4.875rem] origin-top opacity-100 scale-100 visible shadow-elementBox bg-white
        w-2/3"
        v-if="modelValue"

        v-bind="$attrs"
    >
      <div
          class="lg:rounded-2xl bg-gray-0 text-indigo-900 lg:grid lg:grid-cols-[4fr,1fr] overflow-hidden"
      >
        <slot></slot>
      </div>
    </div>

  </transition>
    <transition>
  <div
      class="w-screen h-screen fixed top-0 left-0 z-10"
      v-if="modelValue"
      @click="modelValue = false"
  ></div>
    </transition>

</template>

<script setup>

import {useVModel} from "@vueuse/core";
import {ref} from "vue";

const props = defineProps({
  modelValue:{
    type:Boolean

  }
})

const isOpen =useVModel(props)

const isClose=()=>{
  props.modelValue.value = false
  // console.log(isOpen.value)
  }
</script>

<style scoped>

.fade-enter-active{
  -webkit-animation: fadeInDown .3s;
  animation: fadeInDown .3s;
}

.fade-leave-active{
  transition: all 0.3s;
}

.fade-leave-to {
  opacity: 0;
}

/*弹层动画（从上往下）*/

@keyframes fadeInDown {
  0% {
    -webkit-transform: translate3d(0, -20%, 0);
    -webkit-transform: translate3d(0, -20%, 0);
    transform: translate3d(0, -20%, 0);
    transform: translate3d(0, -20%, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
@-webkit-keyframes fadeInDown {
  0% {
    -webkit-transform: translate3d(0, -20%, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
    opacity: 1;
  }
}

/*弹层动画（从下往上）*/


@keyframes fadelogIn {
  100% {
    -webkit-transform: translate3d(0, 100%, 0);
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  0% {
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes fadelogIn {
  100% {
    -webkit-transform: translate3d(0, 100%, 0);
  }
  0% {
    -webkit-transform: none;
  }
}
</style>
