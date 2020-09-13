import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import firebase from'firebase'
require('firebase/firestore');

  var firebaseConfig = {
    apiKey: "AIzaSyC_fealR2Z-1Cn5q3zPLn3kNZoDNSFGjtw",
    authDomain: "simplylink.firebaseapp.com",
    databaseURL: "https://simplylink.firebaseio.com",
    projectId: "simplylink",
    storageBucket: "simplylink.appspot.com",
    messagingSenderId: "153360537276",
    appId: "1:153360537276:web:9834e71e0e4d37260a62b9",
    measurementId: "G-79C60G2EQQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <App/>
,
  document.getElementById('root')
);


