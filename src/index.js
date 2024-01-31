import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import image1 from "./imgs/image1.png"
import image2 from "./imgs/image2.png";
import image3 from "./imgs/image3.png";
import qatar from "./imgs/qatar.png"

export {
  image1,
  image2,
  image3,

};
export {
  qatar
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
