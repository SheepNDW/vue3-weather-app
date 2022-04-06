import { defineStore } from 'pinia'

export const useStatusStore = defineStore('statusStore', {
  state: () => ({
    isLoading: true,
    errMsg: ''
  })
})
