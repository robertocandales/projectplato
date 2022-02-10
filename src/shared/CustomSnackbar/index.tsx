import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { snackbarCloseAction } from '../../redux/actions/snackbarActions';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

type Props = {};

const CustomSnackbar = (_props: Props) => {
  const dispatch = useAppDispatch();
  const { snackbarType, snackbarMessage, snackbarOpen } = useAppSelector(
    (store) => store.snackbarReducer,
  );

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(snackbarCloseAction(false, snackbarType, snackbarMessage));
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => handleClose()}>
        <Alert elevation={6} variant='filled' onClose={handleClose} severity={snackbarType}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomSnackbar;
