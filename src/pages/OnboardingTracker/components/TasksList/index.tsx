import React from 'react';
import { useDispatch } from 'react-redux';
import { completeUserTaskAction } from '../../../../redux/actions/tasksActions';
import { useAppSelector } from '../../../../redux/store/hooks';

//styles
import { FlexLayout, Text } from '../../../../shared/globalStyles';
import { TaskCard, CheckBox } from './styles';

type Props = {};

const TasksList = (_props: Props) => {
  const dispath = useDispatch();
  const { taskByUser, isloading, error } = useAppSelector((store) => store.tasksReducer);
  const handleChange = (value: string, id: number | string) => {
    dispath(completeUserTaskAction(value, id));
  };
  return (
    <>
      <FlexLayout flexDirection='column' align='center' style={{ padding: '10px' }}>
        <Text fontWeight='600' fontsize='20px' padding='0px 0 10px 0'>
          Tasks list
        </Text>

        {error ? (
          <div>error</div>
        ) : isloading ? (
          <div>loading</div>
        ) : (
          <FlexLayout flexDirection='column' align='center'>
            {(taskByUser || []).map((task) => (
              <TaskCard key={task.id}>
                <CheckBox
                  type='checkbox'
                  checked={task.completed}
                  onChange={() => handleChange(task.title, task.id)}
                />
                <Text fontsize='15px'>{task.title}</Text>
              </TaskCard>
            ))}
          </FlexLayout>
        )}
      </FlexLayout>
    </>
  );
};

export default TasksList;
