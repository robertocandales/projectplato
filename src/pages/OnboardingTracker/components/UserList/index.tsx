import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/store/hooks'
import { useNavigate, useParams } from 'react-router-dom'

//styles
import { FlexLayout, Text } from '../../../../shared/globalStyles'
import { UserCard } from './styles'
import { Theme } from '../../../../config/theme'
import { filterByUser } from 'redux/tasksSlice'

type UserParams = {
    id: string
}

const UserList = () => {
    const dispath = useAppDispatch()
    const { users, isloading, error } = useAppSelector((store) => store.userSlice)
    const { id = 1 } = useParams<UserParams>()
    const navigate = useNavigate()
    const showTasks = (value: string | number) => {
        dispath(filterByUser(value))
        navigate(`/user/${value}`)
    }

    return (
        <>
            <FlexLayout
                flexDirection='column'
                align='center'
                style={{ padding: '10px' }}
                data-testid='user-list'
            >
                <Text fontWeight='600' fontsize='20px' padding='0px 0 10px 0'>
                    User list
                </Text>
                {error.isError ? (
                    <div>{error.message}</div>
                ) : isloading ? (
                    <div>loading</div>
                ) : (
                    <FlexLayout flexDirection='column' align='center'>
                        {(users || []).map((user) => (
                            <UserCard
                                key={user.id}
                                onClick={() => showTasks(user.id)}
                                background={user.id === id ? 'red' : Theme.colors.primary}
                            >
                                {user.name} - {user.username}
                            </UserCard>
                        ))}
                    </FlexLayout>
                )}
            </FlexLayout>
        </>
    )
}

export default UserList
