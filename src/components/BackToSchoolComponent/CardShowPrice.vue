<template>
  <div class="pb-5 text-center bg-white rounded-lg lg:pb-0">
    <div>
      <img :src="imgUrl" alt="" />
    </div>
    <p class="mt-5 text-xs font-semibold text-orange-500 md:text-sm">{{ giftCard }}</p>
    <h4 class="mt-2 text-sm font-semibold lg:text-xl md:text-lg sm:text-md">{{ title }}</h4>
    <p class="mt-5 text-xs md:text-sm">{{ desc }}</p>
    <p class="mt-2 text-xs font-semibold text-gray-500 md:text-sm">
      {{ subDesc }}
    </p>
    <div class="flex justify-center mt-10 md:mt-16">
      <img :src="colorUrl" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  giftCard: String,
  title: String,
  desc: String,
  subDesc: String,
  imgUrl: String,
  colorUrl: String
})
</script>
