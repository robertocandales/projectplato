import axios from 'axios'
import { BASE_API } from '../API'
import { Tasks } from '../DTOs/tasksTypes'

const client = axios.create({
    baseURL: `${BASE_API}`,
})

const TasksService = {
    getTasks: async (): Promise<Tasks[]> => {
        return client.get(`/todos`).then((res) => {
            return res.data
        })
    },
}

export default TasksService
