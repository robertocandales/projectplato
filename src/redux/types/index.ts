import { Tasks } from '../../config/DTOs/tasksTypes';
import { UserList } from '../../config/DTOs/usersTypes';

export const USER_LIST_LOADING = 'USER_LIST_LOADING';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LIST_FAIL = 'USER_LIST_FAIL';

export const TASKS_LIST_LOADING = 'TASKS_LIST_LOADING';
export const TASKS_LIST_SUCCESS = 'TASKS_LIST_SUCCESS';
export const TASKS_LIST_FAIL = 'TASKS_LIST_FAIL';

export const TASK_BY_USER = 'TASK_BY_USER';

export const COMPLETE_USER_TASK = 'COMPLETE_USER_TASK';

export interface UserListLoading {
  type: typeof USER_LIST_LOADING;
}

export interface UserListSuccess {
  type: typeof USER_LIST_SUCCESS;
  payload: UserList[];
}

export interface UserListFail {
  type: typeof USER_LIST_FAIL;
}

export interface TasksListLoading {
  type: typeof TASKS_LIST_LOADING;
}

export interface TasksListSuccess {
  type: typeof TASKS_LIST_SUCCESS;
  payload: Tasks[];
}

export interface TasksListFail {
  type: typeof TASKS_LIST_FAIL;
}

export interface TaskByUser {
  type: typeof TASK_BY_USER;
  payload: number | string;
}

export type UserListDispatchTypes = UserListLoading | UserListSuccess | UserListFail;
export type TasksListDispatchTypes =
  | TasksListLoading
  | TasksListSuccess
  | TasksListFail
  | TaskByUser
  | any;
