import request from "../../api"

export const axiosQuery = () => {
    return ({url, method, data, params}) => {
        return request({
            url,
            method,
            data,
            params
        })
    }
}