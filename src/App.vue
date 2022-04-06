<template>
  <div class="container" v-show="!isLoading">
    <!-- weather(left) -->
    <WeatherSide />
    <!-- info(right) -->
    <InfoSide />
  </div>
  <LoadingPage />
</template>

<script>
import WeatherSide from '@/components/WeatherSide.vue'
import InfoSide from '@/components/InfoSide.vue'
import LoadingPage from '@/components/LoadingPage.vue'
import { useStatusStore } from './stores/status'
import { useWeatherStore } from './stores/weather'
import { computed } from 'vue'

export default {
  name: 'App',
  components: {
    WeatherSide,
    InfoSide,
    LoadingPage
  },
  setup() {
    const statusStore = useStatusStore()

    const weatherStore = useWeatherStore()
    weatherStore.getWeather()

    return {
      isLoading: computed(() => statusStore.isLoading)
    }
  }
}
</script>
