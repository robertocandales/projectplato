import { createAsyncThunk } from '@reduxjs/toolkit'
import { Tasks } from 'config/DTOs/tasksTypes'
import TasksService from 'config/services/TasksListServices'

export const getTasks = createAsyncThunk('tasks/getTasks', async (_, { rejectWithValue }) => {
    try {
        const res: Tasks[] = await TasksService.getTasks()

        return res
    } catch (error: unknown) {
        const message: string = (error as Error).message
        return rejectWithValue(message as string)
    }
})
