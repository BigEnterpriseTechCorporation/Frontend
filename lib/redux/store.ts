import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import addTasks from './slices/addTaskSlice'
import fullTasks from './slices/fullTaskSlice'
import drag from './slices/dragSlice'

const store = configureStore({
	reducer: {
		addTasks,
		fullTasks,
		drag
	},
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default store
