import React from 'react';
import { useDispatch } from 'react-redux';
import { tasksByUserAction } from '../../../../redux/actions/tasksActions';
import { useAppSelector } from '../../../../redux/store/hooks';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//styles
import { FlexLayout, Text } from '../../../../shared/globalStyles';
import { UserCard } from './styles';
import { Theme } from '../../../../config/theme';

type Props = {};

const UserList = (_props: Props) => {
  const params = useParams();
  const { id } = params;
  let navigate = useNavigate();

  const { users, isloading, error } = useAppSelector((store) => store.userReducer);
  const dispath = useDispatch();
  const showTasks = (value: string | number) => {
    dispath(tasksByUserAction(value));
    navigate(`/user/${value}`);
  };

  return (
    <>
      <FlexLayout flexDirection='column' align='center' style={{ padding: '10px' }}>
        <Text fontWeight='600' fontsize='20px' padding='0px 0 10px 0'>
          User list
        </Text>
        {error ? (
          <div>error</div>
        ) : isloading ? (
          <div>loading</div>
        ) : (
          <FlexLayout flexDirection='column' align='center'>
            {(users || []).map((user) => (
              <UserCard
                key={user.id}
                onClick={() => showTasks(user.id)}
                background={user.id === id ? 'red' : Theme.colors.primary}>
                {user.name} - {user.username}
              </UserCard>
            ))}
          </FlexLayout>
        )}
      </FlexLayout>
    </>
  );
};

export default UserList;
