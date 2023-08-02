import axios from 'axios'

const api = axios.create({
  baseURL: process.env.BASE_URL,
})

console.log('# BASE URL =>', api.defaults.baseURL)

export default api
