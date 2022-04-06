import { defineStore } from 'pinia'
import { getCityLocation } from '@/api/Geocoding'
import { getWeatherData } from '@/api/WeatherData'
import { useStatusStore } from './status'

export const useWeatherStore = defineStore('weatherStore', {
  state: () => {
    return {
      coordinates: {
        city: '臺北市',
        lat: '25.0375198',
        lon: '121.5636796'
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
      const useStatus = useStatusStore()
      useStatus.isLoading = true
      try {
        const data = await getCityLocation(cityName)
        this.coordinates.lat = data[0].lat
        this.coordinates.lon = data[0].lon
        this.coordinates.city = data[0].local_names.zh
        this.getWeather()
      } catch (error) {
        useStatus.errMsg = '無效的城市名 請重新輸入! '
        setTimeout(() => {
          useStatus.isLoading = false
          useStatus.errMsg = ''
        }, 2500)
      }
    },
    async getWeather() {
      const data = await getWeatherData(this.coordinates)
      const { dt, temp, weather } = data.current
      this.current = { dt, temp, weather }
      this.daily = data.daily

      const useStatus = useStatusStore()
      useStatus.isLoading = false
    }
  }
})
