<template>
  <div>
    <!-- navbar bg color -->
    <div class="bg-gray-200">
      <!-- navbar container -->
      <div class="max-w-xs px-2 py-2 mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-5xl">
        <!-- navbar -->
        <nav class="flex items-center justify-between">
          <div>
            <router-link to="/">
              <font-awesome-icon :icon="['fab', 'apple']" class="text-md md:text-xl" />
            </router-link>
          </div>
          <div class="items-center hidden text-xs font-semibold md:gap-5 lg:gap-9 md:flex">
            <router-link to="/stores">Store</router-link>
            <a href="#">Mac</a>
            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">Vision</a>
            <a href="#">AirPods</a>
            <a href="#">TV & Home</a>
            <a href="#">Entertainment</a>
            <a href="#">Accessories</a>
            <a href="#">Support</a>
          </div>
          <div class="flex items-center justify-between gap-3 md:gap-5 lg:gap-9">
            <a href="#">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-md md:text-xl" />
            </a>
            <router-link to="/login">
              <font-awesome-icon :icon="['fas', 'bag-shopping']" class="text-md md:text-xl" />
            </router-link>
            <router-link to="">
              <font-awesome-icon
                :icon="['fas', 'bars']"
                class="md:hidden text-md md:text-xl"
                @click.prevent="modalIsClosed = false"
              />
            </router-link>
            <h2>{{ user.$state.user }}</h2>
          </div>
        </nav>
      </div>
      <div
        class="fixed top-0 z-50 w-screen h-screen bg-white md:hidden"
        v-show="modalIsClosed === false"
      >
        <div class="max-w-md pt-2 mx-auto sm:max-w-xl">
          <div class="text-right">
            <font-awesome-icon
              :icon="['fas', 'xmark']"
              class="text-2xl"
              @click.prevent="closeModal"
            />
          </div>
          <div class="flex flex-col items-start gap-2 font-semibold sm:text-2xl">
            <router-link to="/stores">Store</router-link>
            <a href="#">Mac</a>
            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">Vision</a>
            <a href="#">AirPods</a>
            <a href="#">TV & Home</a>
            <a href="#">Entertainment</a>
            <a href="#">Accessories</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const modalIsClosed = ref(true)

const closeModal = () => {
  modalIsClosed.value = true
}
</script>
