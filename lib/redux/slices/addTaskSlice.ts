import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface state {
	isMenuOpened: boolean
}

const initialState: state = {
	isMenuOpened: false,
}

export const addTasks = createSlice({
	name: 'addTasks',
	initialState,
	reducers: {
		toggleAddTasks: (state): state => {
			return {
				...state,
				isMenuOpened: !state.isMenuOpened,
			}
		},
	},
})

export const { toggleAddTasks } = addTasks.actions

export const selectIsAddTaskOpened = (state: RootState) => state.addTasks.isMenuOpened

export default addTasks.reducer
