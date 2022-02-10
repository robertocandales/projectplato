import { AlertColor } from '@mui/material';
import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from '../types';

interface IinitialState {
  snackbarOpen: boolean;
  snackbarType: AlertColor;
  snackbarMessage: string;
}

const initialState: IinitialState = {
  snackbarOpen: false,
  snackbarType: 'success',
  snackbarMessage: '',
};

const snackbarReducer = (state = initialState, action: any): IinitialState => {
  switch (action.type) {
    case OPEN_NOTIFICATION:
      return {
        ...state,
        ...action.payload,
      };
    case CLOSE_NOTIFICATION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default snackbarReducer;
