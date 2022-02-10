import { AlertColor } from '@mui/material';
import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from '../types';

export const snackbarOpenAction = (
  snackbarOpen: boolean,
  snackbarType: AlertColor = 'success',
  snackbarMessage: string = '',
) => ({
  type: OPEN_NOTIFICATION,
  payload: { snackbarOpen, snackbarType, snackbarMessage },
});

export const snackbarCloseAction = (
  snackbarOpen: boolean,
  snackbarType: AlertColor = 'success',
  snackbarMessage: string = '',
) => ({
  type: CLOSE_NOTIFICATION,
  payload: { snackbarOpen, snackbarType, snackbarMessage },
});
