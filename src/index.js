import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';

import firebase from'firebase'
require('firebase/firestore');

  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <App/>
,
  document.getElementById('root')
);


