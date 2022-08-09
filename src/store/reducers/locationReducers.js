import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { axiosQuery } from "../axiosQuery"

const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: axiosQuery(),
    endpoints(build) {
        return {
            getLocationInfo: build.query({
                query() {
                    return {
                        url: '/location'
                    }
                }
            })
        }
    }
})

export const { useGetLocationInfoQuery } = locationApi
export default locationApi
