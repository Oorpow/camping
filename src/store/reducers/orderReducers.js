import { createSlice, current } from '@reduxjs/toolkit'

const orderSlice = createSlice({
	name: 'order',
	initialState: () => {
		return {
			location: 'Lake',
			tent: [],
			duration: {
				startDate: '',
				endDate: '',
				totalDate: ''
			},
			contactInfo: {
				firstName: '',
				lastName: '',
				email: '',
			},
		}
	},
	reducers: {
		setLocation(state, action) {
			state.location = action.payload
			return state
		},
		setTentInfo(state, action) {
            let currentState = current(state.tent)

            // 过滤出重复项及其在state中的位置
            let repeatItem = currentState.filter(item => item._id === action.payload._id)[0]
            let repeatIndex = currentState.indexOf(repeatItem)
            if (repeatItem != null) {
                // 若数量为0，将其从state中删除
                if (action.payload.num === 0) {
                    state.tent.splice(repeatIndex, 1)
                } else {
                    // 若数量不为0，且在修改同一项时，仅修改其数量，防止添加多个相同的目标
                    repeatItem = {...action.payload, repeatItem}
                    state.tent.splice(repeatIndex, 1, repeatItem)
                }
            } else {
                state.tent.push(action.payload)
            }
			return state
		},
		setDurationDate(state, action) {
			state.duration = action.payload
			return state
		},
		setContactInfo(state, action) {
			state.contactInfo = action.payload
			return state
		}
	},
})

export const { setLocation, setTentInfo, setDurationDate, setContactInfo } = orderSlice.actions

export default orderSlice.reducer
