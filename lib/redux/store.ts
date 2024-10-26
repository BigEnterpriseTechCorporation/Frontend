import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import addTasks from './slices/addTaskSlice'

const store = configureStore({
	reducer: {
		addTasks,
	},
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default store
