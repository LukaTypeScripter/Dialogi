import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "@fontsource/firago";
import "@fontsource/firago/500.css";
import "@fontsource/firago/500-italic.css";
import "@fontsource/firago/400.css";
import "@fontsource/firago/400-italic.css";
import "@fontsource/firago/600.css";
import "@fontsource/firago/600-italic.css";
import "@fontsource/firago/700.css";
import "@fontsource/firago/700-italic.css";
import { Provider } from 'react-redux';
import store from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
)
