import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAxubfrj49gFmvJMotYL4Pj1tgMf2djlSA",
    authDomain: "chat-app-4130d.firebaseapp.com",
    projectId: "chat-app-4130d",
    storageBucket: "chat-app-4130d.appspot.com",
    messagingSenderId: "1010678942218",
    appId: "1:1010678942218:web:2f08aacd2944c6e5552df3"
  }).auth();