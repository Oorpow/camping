import request from './index'

export const userLogin = (formData) => request({
    url: '/users/login',
    method: 'post',
    data: formData
})