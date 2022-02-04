import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { routes } from './config/routes';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import { CustomTheme } from './config/theme';

//store & customTypes
const store = generateStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={CustomTheme}>
        <BrowserRouter>
          <Routes>
            {(routes || []).map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
            <Route path='*' element={<Navigate to='/user/1' />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
