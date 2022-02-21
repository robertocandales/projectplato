import Checkbox from '@mui/material/Checkbox'
import { snackbarOpenAction } from 'redux/store/snackbarSlice'
import { completedUserTask } from 'redux/tasksSlice'
import { useAppDispatch, useAppSelector } from '../../../../redux/store/hooks'

//styles
import { FlexLayout, Text } from '../../../../shared/globalStyles'
import { TaskCard } from './styles'

const TasksList = () => {
    const dispatch = useAppDispatch()
    const { taskByUser, isloading, error } = useAppSelector((store) => store.tasksSlice)
    const handleChange = (value: string, id: number | string) => {
        dispatch(completedUserTask({ value, id }))
        dispatch(
            snackbarOpenAction({
                snackbarOpen: true,
                snackbarType: 'success',
                snackbarMessage: value,
            })
        )
    }
    return (
        <>
            <FlexLayout flexDirection='column' align='center' style={{ padding: '10px' }}>
                <Text fontWeight='600' fontsize='20px' padding='0px 0 10px 0'>
                    Tasks list
                </Text>

                {error.isError ? (
                    <div> {error.message} </div>
                ) : isloading ? (
                    <div>loading</div>
                ) : (
                    <FlexLayout flexDirection='column' align='center'>
                        {(taskByUser || []).map((task) => (
                            <TaskCard key={task.id}>
                                <Checkbox
                                    checked={task.completed}
                                    onChange={() => handleChange(task.title, task.id)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />

                                <Text fontsize='15px'>{task.title}</Text>
                            </TaskCard>
                        ))}
                    </FlexLayout>
                )}
            </FlexLayout>
        </>
    )
}

export default TasksList
