<script>
import { ref } from 'vue'
import { useWeatherStore } from '@/stores/weather'

export default {
  name: 'SearchBox',
  setup() {
    const cityName = ref('')
    const store = useWeatherStore()

    return {
      cityName,
      search: store.searchCity
    }
  }
}
</script>

<template>
  <div class="location-container">
    <input type="text" placeholder="City" v-model="cityName" />
    <button class="location-button" type="button" @click="search(cityName)">
      <span>Search</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.location-container {
  position: relative;
  width: 320px;
  height: 100px;
  grid-area: search;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    outline: none;
    width: 300px;
    height: 28px;
    padding: 6px;
    display: block;
    box-sizing: border-box;
    color: #222831;
    border: none;
    border-radius: 5px;
  }
  .location-button {
    width: 320px;
    padding: 8px;
    box-sizing: border-box;
    border: none;
    color: #fff;
    background-image: $colorGradient;
    border-radius: 25px;
    font-weight: bold;
    box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
