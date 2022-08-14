import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { axiosQuery } from "../axiosQuery"

const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: axiosQuery(),
    endpoints(build) {
        return {
            createOrder: build.mutation({
                query(data) {
                    return {
                        url: '/order',
                        method: 'post',
                        data
                    }
                }
            })
        }
    }
})

export const { useCreateOrderMutation } = orderApi
export default orderApi