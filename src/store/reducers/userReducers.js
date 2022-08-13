import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { axiosQuery } from '../axiosQuery'

const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: axiosQuery(),
	endpoints(build) {
		return {
			login: build.mutation({
				query(data) {
                    return {
                        url: '/users/login',
                        method: 'post',
                        data 
                    }
                },
			}),
			register: build.mutation({
				query(data) {
					return {
						url: '/users',
						method: 'post',
						data
					}
				}
			}),
			getAuthCode: build.mutation({
				query(data) {
					return {
						url: '/users/email',
						method: 'post',
						data
					}
				}
			})
		}
	},
})

export const { useLoginMutation, useRegisterMutation, useGetAuthCodeMutation } = userApi
export default userApi
