<template>
  <div class="max-w-sm px-4 pt-4 pb-8 mx-auto my-4 text-center bg-blue-200 rounded-lg">
    <h3 class="text-lg font-bold md:text-xl">Login</h3>
    <form class="text-lg md:text-xl">
      <div class="my-4">
        <input
          type="text"
          placeholder="Username"
          class="p-2 rounded-sm w-80"
          required
          v-model="inputUsername"
        />
      </div>
      <div class="mb-4">
        <input
          type="password"
          placeholder="Password"
          class="p-2 rounded-sm w-80"
          required
          v-model="inputPassword"
        />
      </div>
      <div>
        <input
          type="submit"
          value="Login"
          @click.prevent="login"
          class="px-5 py-2 bg-white rounded-sm w-80"
        />
        <p class="text-red-500" v-show="isInvalid === true">Invalid email or password</p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const inputPassword = ref('')
const inputUsername = ref('')
let isInvalid = ref(false)

function login(): void {
  if (inputPassword.value === 'user') {
    isInvalid.value = false
    user.setUser(inputUsername.value)
    console.log('login success')
  } else {
    isInvalid.value = true
    console.log('invalid email or password')
  }
}
</script>
