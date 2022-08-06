import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { axiosQuery } from "../axiosQuery"

const tentsApi = createApi({
    reducerPath: 'tentsApi',
    baseQuery: axiosQuery(),
    endpoints(build) {
        return {
            getTents: build.query({
                query() {
                    return {
                        url: '/tents'
                    }
                }
            }),
        }
    }
})

export const { useGetTentsQuery } = tentsApi
export default tentsApi

