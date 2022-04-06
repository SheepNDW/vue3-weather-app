<template>
  <div class="container">
    <!-- weather(left) -->
    <WeatherSide />
    <!-- info(right) -->
    <InfoSide />
  </div>
</template>

<script>
import WeatherSide from '@/components/WeatherSide.vue'
import InfoSide from '@/components/InfoSide.vue'

export default {
  name: 'App',
  components: {
    WeatherSide,
    InfoSide
  }
}
</script>
