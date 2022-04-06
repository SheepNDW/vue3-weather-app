import request from '@/utils/request'
const key = `${process.env.VUE_APP_KEY}`
const baseURL = 'https://api.openweathermap.org/geo/1.0/direct'

/**
 * 取得城市的經緯度
 * @param {String} city - 城市名稱
 * @returns Promise
 */
export const getCityLocation = (city) => {
  return request(`${baseURL}?q=${city}&limit=2&appid=${key}`, 'get')
}
