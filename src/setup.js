import * as React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig={
    apiKey: "AIzaSyCm2A1mtWJRB99zi8C1WSIuRvVL2LqCCJc",
    authDomain: "authentication-8dd6a.firebaseapp.com",
    projectId: "authentication-8dd6a",
    storageBucket: "authentication-8dd6a.appspot.com",
    messagingSenderId: "68707076034",
    appId: "1:68707076034:web:3c086bf248bfb779b5f85b",
    measurementId: "G-6YX0JJ652F"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default ()=>{
    return {firebase,auth};
}