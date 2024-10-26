import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface state {
	isMenuOpened: boolean
	choosedTaskId:number
}

const initialState: state = {
	isMenuOpened: false,
	choosedTaskId: 1
}

export const fullTasks = createSlice({
	name: 'addTasks',
	initialState,
	reducers: {
		toggleFullTasks: (state): state => {
			return {
				...state,
				isMenuOpened: !state.isMenuOpened,
			}
		},
		chooseTaskId: (state,action:PayloadAction<number>) => {
			return {
				...state,
				choosedTaskId: action.payload
			}
		}
	},
})

export const { toggleFullTasks,chooseTaskId } = fullTasks.actions

export const selectIsAddTaskOpened = (state: RootState) => state.fullTasks.isMenuOpened
export const selectChoosedTaskId = (state: RootState) => state.fullTasks.choosedTaskId

export default fullTasks.reducer
