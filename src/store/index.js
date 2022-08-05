import {
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit'
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
import userApi from './reducers/userReducers'
import { accessSlice } from './reducers/accessReducers'
import flowsApi from './reducers/flowsReducer'

const accessPersistConfig = {
	key: 'access',
	storage: storage
}

const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
		[flowsApi.reducerPath]: flowsApi.reducer,
		access: persistReducer(accessPersistConfig, accessSlice.reducer)
	},
	middleware: getDefaultMiddleware({
		serializableCheck: {
			/* ignore persistance actions */
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	})
})

setupListeners(store.dispatch)

export default store
