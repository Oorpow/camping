import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './reducers/loadingReducer'

const store = configureStore({
    reducer: {
        loading: loadingSlice
    }
})

export default store