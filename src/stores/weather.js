import { defineStore } from 'pinia'
import { getCityLocation } from '@/api/Geocoding'
import { getWeatherData } from '@/api/WeatherData'

export const useWeatherStore = defineStore('weatherStore', {
  state: () => {
    return {
      coordinates: {
        city: '',
        lat: '',
        lon: ''
      },
      current: {
        dt: '',
        temp: '',
        weather: [
          { description: '', icon: '10d' }
        ]
      },
      daily: [{
        dt: '',
        temp: { day: '', max: '', min: '' },
        weather: [
          { description: '', icon: '10d' }
        ]
      }],
      activeIndex: 0
    }
  },
  getters: {
    weekList: (state) => {
      if (state.daily.length > 5) return state.daily.slice(0, 5)
      return []
    }
  },
  actions: {
    async searchCity(cityName) {
      const data = await getCityLocation(cityName)
      this.coordinates.lat = data[0].lat
      this.coordinates.lon = data[0].lon
      this.coordinates.city = data[0].local_names.zh
      this.getWeather()
    },
    async getWeather() {
      const data = await getWeatherData(this.coordinates)
      const { dt, temp, weather } = data.current
      this.current = { dt, temp, weather }
      this.daily = data.daily
    }
  }
})
