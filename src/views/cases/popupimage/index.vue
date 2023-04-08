<template>
<div v-if="show" class="w-full h-52 bg-purpleTitle">
  popupimage
</div>
</template>

<script setup>
defineProps({
  show:{
    default:false,
    type:Boolean,
  }
})

</script>

<style scoped>

</style>
