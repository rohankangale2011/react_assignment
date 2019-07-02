import React from 'react';
import {Provider} from 'react-redux';
import RouteComponent from './route';
import {configStore} from './redux/store';

/**
 * Store(single source) of the application
 */
const store = configStore();

/**
 * App function: Root component of application
 */
export default function App() {
  return (
    <Provider store={store}>
      <RouteComponent />
    </Provider>
  );
}
