import request from '@/utils/request'
const baseURL = 'https://api.openweathermap.org/data/2.5/onecall'
const key = `${process.env.VUE_APP_KEY}`
const exclude = 'minutely,hourly,alerts'

/**
 * 取得天氣資訊
 * @param {Object} coordinates - 地理座標
 * @returns Promise
 */
export const getWeatherData = (coordinates) => {
  return request(`${baseURL}?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=${exclude}&lang=zh_tw&units=metric&appid=${key}`, 'get')
}
