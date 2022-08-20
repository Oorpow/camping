import axios from 'axios'
import store from '../store'
import history from '../router/history'
import { removeUserInfo } from '../store/reducers/accessReducers'

const request = axios.create({
    baseURL: 'http://175.178.99.5:5005/api',
    // baseURL: 'http://localhost:5005/api',
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
    if (err.response.status === 401) {
        // 用户无权访问，回login页
        // useHistory只能在hooks使用，因此需要独立拓展history模块
        store.dispatch(removeUserInfo())
        history.replace('/login')
    }
    return Promise.reject(err)
})

export default request