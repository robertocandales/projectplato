import {
  TasksListDispatchTypes,
  TASKS_LIST_LOADING,
  TASKS_LIST_SUCCESS,
  TASKS_LIST_FAIL,
  TASK_BY_USER,
  COMPLETE_USER_TASK,
} from '../types';
import { Dispatch } from 'redux';

import TasksService from '../../config/services/TasksListServices';
import { Tasks } from '../../config/DTOs/tasksTypes';

export const tasksAction = () => async (dispatch: Dispatch<TasksListDispatchTypes>) => {
  try {
    dispatch({
      type: TASKS_LIST_LOADING,
    });
    const res: Tasks[] = await TasksService.getTasks();

    dispatch({
      type: TASKS_LIST_SUCCESS,
      payload: res,
    });
    dispatch(tasksByUserAction(1));
  } catch (e) {
    dispatch({
      type: TASKS_LIST_FAIL,
    });
  }
};

export const tasksByUserAction = (value: number | string) => {
  return {
    type: TASK_BY_USER,
    payload: value,
  };
};

export const completeUserTaskAction = (title: string, id: number | string) => {
  return {
    type: COMPLETE_USER_TASK,
    payload: { title, id },
  };
};
