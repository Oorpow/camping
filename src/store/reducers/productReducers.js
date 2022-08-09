import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { axiosQuery } from '../axiosQuery'

const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: axiosQuery(),
    endpoints(build) {
        return {
            getProductByType: build.query({
                query(productType) {
                    return {
                        url: `/product/${productType}`
                    }
                }
            })
        }
    }
})

export const { useGetProductByTypeQuery } = productApi
export default productApi