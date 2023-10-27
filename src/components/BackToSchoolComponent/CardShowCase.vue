<template>
  <div class="px-10 pt-8 space-y-2 bg-white rounded-lg">
    <h4 class="text-sm font-semibold sm:text-md md:text-lg lg:text-xl">{{ title }}</h4>
    <h3 class="text-lg font-semibold md:text-2xl sm:text-xl lg:text-3xl">{{ subTitle }}</h3>
    <div>
      <img :src="imgUrl" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: String,
  subTitle: String,
  imgUrl: String
})
</script>
