import React from 'react';
import ReactDOM from 'react-dom';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OverlayScrollbars from 'overlayscrollbars';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

OverlayScrollbars(document.body, {
  nativeScrollbarsOverlaid: {
    initialize: true,
    showNativeScrollbars: false,
  },
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
