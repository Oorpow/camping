import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { axiosQuery } from "../axiosQuery"

const flowsApi = createApi({
    reducerPath: 'flowsApi',
    baseQuery: axiosQuery(),
    endpoints(build) {
        return {
            getFlows: build.query({
                query() {
                    return {
                        url: '/flows'
                    }
                }
            })
        }
    }
})

export const { useGetFlowsQuery } = flowsApi
export default flowsApi