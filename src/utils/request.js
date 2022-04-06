import axios from 'axios'

axios.interceptors.response.use(res => res.data, err => Promise.reject(err))

export default (url, method, submitData) => {
  return axios({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
