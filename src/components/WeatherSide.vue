<script>
import { computed } from 'vue'
import dayjs from 'dayjs'
import { useWeatherStore } from '@/stores/weather'

export default {
  name: 'WeatherSide',
  setup() {
    const store = useWeatherStore()
    const iconUrl = computed(
      () => `https://openweathermap.org/img/wn/${store.current.weather[0].icon}@4x.png`
    )

    return {
      currentWeather: computed(() => store.current),
      cityName: computed(() => store.coordinates.city),
      iconUrl,
      dayjs
    }
  }
}
</script>

<template>
  <div class="weather-side">
    <div class="gradient"></div>
    <div class="date-container">
      <h2>當前天氣</h2>
      <span class="date">{{ dayjs.unix(currentWeather.dt).format('YYYY / MM / DD') }}</span>
      <span class="location">
        <i class="material-icons-outlined">location_on</i>
        <p>{{ cityName }}</p>
      </span>
    </div>

    <div class="weather-container">
      <img :src="iconUrl" class="icon" alt="weather-icon" />
      <div class="weather-temp">{{ Math.round(currentWeather.temp) }}°C</div>
      <div class="weather-desc">{{ currentWeather.weather[0].description }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//--- left part start ---
.weather-side {
  position: relative;
  width: 300px;
  height: 100%;
  border-radius: 25px 0 0 25px;
  box-shadow: 0 0 35px -10px rgba(0, 0, 0, 0.2);
}

.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: $colorGradient;
  border-radius: 25px 0 0 25px;
  opacity: 0.8;
}

.date-container {
  position: absolute;
  top: 25px;
  left: 25px;

  .date {
    display: block;
    margin-top: 4px;
  }

  .location {
    display: flex;
    align-items: center;
    margin-top: 4px;

    i {
      font-size: 20px;
    }
  }
}

.weather-container {
  position: absolute;
  bottom: 25px;
  left: 25px;

  .icon {
    transform: scale(1.2);
  }
  .weather-temp {
    font-size: 4em;
    font-weight: bold;
  }
  .weather-desc {
    font-size: 20px;
  }
}
//--- left part end ---
</style>
