import request from './index'

export const getTents = () => request({
    url: '/tents'
})