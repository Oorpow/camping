import axios from 'axios'
import store from '../store'
import { showLoading, hideLoading } from '../store/reducers/loadingReducer'

const request = axios.create({
    baseURL: process.env.DEV_URL,
})

request.interceptors.request.use(config => {
    store.dispatch(showLoading())
    return config
}, err => {
    return Promise.reject(err)
})

request.interceptors.response.use(res => {
    store.dispatch(hideLoading())
    return res
}, err => {
    return Promise.reject(err)
})

export default request