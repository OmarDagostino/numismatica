import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAl6XrAopauFHRybpbKGqPEDytnxNsodaE",
  authDomain: "ecommerce-coins.firebaseapp.com",
  projectId: "ecommerce-coins",
  storageBucket: "ecommerce-coins.appspot.com",
  messagingSenderId: "844128399931",
  appId: "1:844128399931:web:e6d2f4fbac3081f664221e"
};
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
