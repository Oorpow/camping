import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { axiosQuery } from "../axiosQuery"

const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: axiosQuery(),
    endpoints(build) {
        return {
            getUserOrder: build.query({
                query(id) {
                    return {
                        url: `/order/${id}`
                    }
                }
            }),
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

export const { useCreateOrderMutation, useGetUserOrderQuery } = orderApi
export default orderApi