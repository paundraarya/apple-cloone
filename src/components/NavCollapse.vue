<template>
  <div
    class="flex flex-col gap-2 mt-2 pb-2 border-b-[1px] border-gray-300 border-solid md:border-none md:m-0 md:p-0"
  >
    <input type="checkbox" :id="id" class="hidden" />
    <label :for="id" class="flex justify-between items-center after:content-['+'] md:after:hidden">
      <h5 class="font-semibold">{{ title }}</h5>
    </label>
    <div
      class="flex-col hidden gap-2 transition-transform duration-300 ease-in md:flex"
      v-for="link in links"
      :key="link"
    >
      <a href="#" class="">&nbsp; {{ link }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: String,
  id: String,
  links: Array<string>
})
</script>
