import { createSlice } from "@reduxjs/toolkit"

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        showLoading(state, action) {
            state = true
            return state
        },
        hideLoading(state, action)  {
            state = false
            return state
        }
    }
})

export const { showLoading, hideLoading } = loadingSlice.actions
export default loadingSlice.reducer