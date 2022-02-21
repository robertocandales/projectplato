import { useEffect } from 'react'
import UserList from './components/UserList'
import TasksList from './components/TasksList'
//import { userAction } from '../../redux/actions/userActions'

//styles
import { Container, WrapperOnboarding } from './styles'
import { Text } from '../../shared/globalStyles'
//import { tasksAction } from '../../redux/actions/tasksActions'
import { useAppDispatch } from '../../redux/store/hooks'
import { getUsers } from 'redux/userSlice'
import { getTasks } from 'redux/actions/tasksActions'
import { filterByUser } from 'redux/tasksSlice'

const OnboardingTracker = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const execute = async () => {
            const res = await dispatch(getTasks())

            dispatch(getUsers())
            if (res) dispatch(filterByUser(1))
        }

        execute()
    }, [dispatch])

    return (
        <WrapperOnboarding flexDirection='column' justify='center' align='center'>
            <Text fontWeight='800' fontsize='26px' padding='5vh 0 0 0'>
                Onboarding Tracker
            </Text>
            <Container>
                <>
                    <UserList />
                </>
                <>
                    <TasksList />
                </>
            </Container>
        </WrapperOnboarding>
    )
}

export default OnboardingTracker
