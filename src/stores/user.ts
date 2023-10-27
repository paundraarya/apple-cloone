import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: ''
  }),
  actions: {
    setUser(user: string) {
      this.user = user
    }
  }
})
