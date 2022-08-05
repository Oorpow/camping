import { createSlice } from '@reduxjs/toolkit'

export const accessSlice = createSlice({
    name: 'access',
    initialState: () => {
        return {
            isLogged: false,
            token: '',
            info: null
        }
    },
    reducers: {
        setUserInfo(state, action) {
            state.isLogged = true
            state.token = action.payload.token
            state.info = action.payload.info
        },
        removeUserInfo(state, action) {
            state.isLogged = false
            state.token = ''
            state.info = null
        }
    }
})

export const { setUserInfo, removeUserInfo } = accessSlice.actions