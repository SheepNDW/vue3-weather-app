<script>
import { useWeatherStore } from '@/stores/weather'
import { computed } from 'vue'

export default {
  name: 'TodayInfo',
  setup() {
    const store = useWeatherStore()

    const selectedDate = computed(() => store.weekList[store.activeIndex])

    return {
      selectedDate
    }
  }
}
</script>

<template>
  <div class="today-info-container">
    <div class="today-info">
      <div class="info-box mb-1">
        <span class="title">當日降雨率</span>
        <span class="value">{{ Math.floor(selectedDate?.pop * 100) }}%</span>
      </div>
      <div class="info-box mb-1">
        <span class="title">當日最高溫</span>
        <span class="value">{{ Math.round(selectedDate?.temp.max) }}°C</span>
      </div>
      <div class="info-box">
        <span class="title">當日最低溫</span>
        <span class="value">{{ Math.round(selectedDate?.temp.min) }}°C</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.today-info-container {
  grid-area: info;
}
.today-info {
  padding: 16px;
  box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  .info-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.mb-1 {
  margin-bottom: 10px;
}
</style>
