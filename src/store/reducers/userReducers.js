import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { axiosQuery } from '../axiosQuery'

const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: axiosQuery(),
	tagTypes: ['user'],
	endpoints(build) {
		return {
			login: build.mutation({
				query(data) {
					return {
						url: '/users/login',
						method: 'post',
						data,
					}
				},
			}),
			register: build.mutation({
				query(data) {
					return {
						url: '/users',
						method: 'post',
						data,
					}
				},
			}),
			getAuthCode: build.query({
				query() {
					return {
						url: '/code',
					}
				},
			}),
			getUserInfo: build.query({
				query(id) {
					return {
						url: `/users/${id}`,
					}
				},
				providesTags: ['user']
			}),
			updateUserInfo: build.mutation({
				query(data) {
					return {
						url: `/users/${data.userId}`,
						method: 'put',
						data,
					}
				},
				invalidatesTags: ['user']
			}),
		}
	},
})

export const {
	useLoginMutation,
	useRegisterMutation,
	useGetAuthCodeQuery,
	useUpdateUserInfoMutation,
	useGetUserInfoQuery,
} = userApi
export default userApi
