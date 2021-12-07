import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import rootReducer from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Cart = React.lazy(() => import('./components/Cart'))

const store = createStore(rootReducer)


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/cart"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <Cart />
              </React.Suspense>
            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
