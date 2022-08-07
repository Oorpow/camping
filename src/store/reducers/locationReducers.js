import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { axiosQuery } from "../axiosQuery"

const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: axiosQuery(),
    endpoints(build) {
        return {
            getLocationInfo: build.query({
                query(areaType) {
                    return {
                        url: `/location/${areaType}`
                    }
                }
            })
        }
    }
})

export const { useGetLocationInfoQuery } = locationApi
export default locationApi
