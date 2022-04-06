<script>
import { useWeatherStore } from '@/stores/weather'
import dayjs from 'dayjs'
import { computed } from 'vue'

export default {
  name: 'WeekList',
  setup() {
    const store = useWeatherStore()

    const activate = (index) => {
      store.activeIndex = index
    }

    return {
      weekList: computed(() => store.weekList),
      activeIndex: computed(() => store.activeIndex),
      dayjs,
      activate
    }
  }
}
</script>

<template>
  <div class="week-container">
    <ul class="week-list">
      <template v-if="weekList">
        <li
          v-for="(item, i) in weekList"
          :key="item.dt"
          :class="{ active: activeIndex === i }"
          @click="activate(i)"
        >
          <img
            :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`"
            class="icon"
            alt="weather-icon"
          />
          <span class="day-name">{{ dayjs.unix(item.dt).format('MM/DD') }}</span>
          <span class="day-temp">{{ Math.round(item.temp.day) }}°C</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.week-container {
  grid-area: weeklist;
}
.week-list {
  margin: 10px 25px;
  border-radius: 10px;
  box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.4);

  display: flex;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: 15px;
    cursor: pointer;
    border-radius: 10px;
    text-align: center;
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
      background-color: rgba(255, 255, 255, 0.9);
      color: #222831;
    }

    span {
      display: block;
    }
  }

  .day-name {
    margin-top: 10px;
    text-align: center;
  }
  .day-temp {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }
}

.active {
  background-color: rgba(255, 255, 255, 0.8);
  color: #222831;
}
</style>
