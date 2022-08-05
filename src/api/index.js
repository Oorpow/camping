import axios from 'axios'
import store from '../store'

const request = axios.create({
    baseURL: 'http://localhost:5005/api',
    withCredentials: true
})

request.interceptors.request.use(config => {
    const globalState = store.getState()
    if (globalState.access.isLogged) {
        config.headers['Authorization'] = globalState.access.token
    }
    return config
}, err => {
    return Promise.reject(err)
})

request.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)
})

export default request