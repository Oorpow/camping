import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import loadingSlice from './reducers/loadingReducer'
import { accessSlice } from './reducers/accessReducers'
import userApi from './reducers/userReducers'
import flowsApi from './reducers/flowsReducer'
import tentsApi from './reducers/tentsReducers'
import pricingApi from './reducers/pricingReducers'
import locationApi from './reducers/locationReducers'
import productApi from './reducers/productReducers'
import orderReducers from './reducers/orderReducers'
import orderApi from './reducers/orderApi'

const accessPersistConfig = {
	key: 'access',
	storage: storage,
}

const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
		[flowsApi.reducerPath]: flowsApi.reducer,
		[tentsApi.reducerPath]: tentsApi.reducer,
		[pricingApi.reducerPath]: pricingApi.reducer,
		[locationApi.reducerPath]: locationApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
		[orderApi.reducerPath]: orderApi.reducer,
		order: orderReducers,
		access: persistReducer(accessPersistConfig, accessSlice.reducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
			.concat(userApi.middleware)
			.concat(flowsApi.middleware)
			.concat(tentsApi.middleware)
			.concat(pricingApi.middleware)
			.concat(locationApi.middleware)
			.concat(productApi.middleware)
			.concat(orderApi.middleware)
})

setupListeners(store.dispatch)

export default store
