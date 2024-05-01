import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-icons.css';
import './assets/css/glightbox.min.css';
import './assets/css/swiper-bundle.min.css';
import './assets/css/aos.css';
import './index.css';
import './assets/js/bootstrap.bundle.min.js';
import './assets/js/glightbox.min.js';
import './assets/js/purecounter_vanilla.js';
// import './assets/js/isotope.pkgd.js';
import './assets/js/swiper-bundle.min.js';
import './assets/js/aos.js';
import App from './App';
// import main from './assets/js/main.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

