import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:5005/api',
    withCredentials: true
})

request.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

request.interceptors.response.use(res => {
    return res
}, err => {
    console.log(err)
    return Promise.reject(err)
})

export default request