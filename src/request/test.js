import request from './index'

export const getDataJSON = () => request({
    url: 'https://api.wrdan.com/randimg?key=mm'
})