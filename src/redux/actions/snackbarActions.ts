import { AlertColor } from '@mui/material';
import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION, SnackbarActionsTypes } from '../types';

export const snackbarOpenAction = (
  snackbarOpen: boolean,
  snackbarType: AlertColor = 'success',
  snackbarMessage: string = '',
): SnackbarActionsTypes => ({
  type: OPEN_NOTIFICATION,
  payload: { snackbarOpen, snackbarType, snackbarMessage },
});

export const snackbarCloseAction = (
  snackbarOpen: boolean,
  snackbarType: AlertColor = 'success',
  snackbarMessage: string = '',
): SnackbarActionsTypes => ({
  type: CLOSE_NOTIFICATION,
  payload: { snackbarOpen, snackbarType, snackbarMessage },
});
