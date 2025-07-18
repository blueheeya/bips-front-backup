import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import './index.css';
import App from './App';
import { store } from '../src/store'; //store 경로
=======
import store from '../src/store'; //store 경로
import App from './App';
import './index.css';
>>>>>>> a7c4b026c23d7989542a0681288399a510fe4d21

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
);
