import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { routes } from './config/routes';
import { Provider } from 'react-redux';
import generateStore from './redux/store';

//store & customTypes
const store = generateStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {(routes || []).map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
          <Route path='*' element={<Navigate to='/user/1' />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
