import Checkbox from '@mui/material/Checkbox';
import { completeUserTaskAction } from '../../../../redux/actions/tasksActions';
import { useAppDispatch, useAppSelector } from '../../../../redux/store/hooks';

//styles
import { FlexLayout, Text } from '../../../../shared/globalStyles';
import { TaskCard } from './styles';

type Props = {};

const TasksList = (_props: Props) => {
  const dispath = useAppDispatch();
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
  );
};

export default TasksList;
