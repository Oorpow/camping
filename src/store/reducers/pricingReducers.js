import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { axiosQuery } from "../axiosQuery"

const pricingApi = createApi({
    reducerPath: 'pricingApi',
    baseQuery: axiosQuery(),
    endpoints(build) {
        return {
            getPricingIcons: build.query({
                query() {
                    return {
                        url: '/pricing'
                    }
                }
            }),
            getPrebuilt: build.query({
                query() {
                    return {
                        url: '/prebuilt'
                    }
                }
            })
        }
    }
})

export const { useGetPricingIconsQuery, useGetPrebuiltQuery } = pricingApi
export default pricingApi