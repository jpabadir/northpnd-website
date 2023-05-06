import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.min.css';
import './index.css';
import App from './App';
import Spinner from 'react-bootstrap/Spinner';
// import reportWebVitals from './reportWebVitals';
import './translation/i18n';


ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center"><Spinner animation="border" role="status" /></div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
