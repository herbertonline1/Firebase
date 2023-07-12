import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyCcHc8uaj7TH9yBHbfU83rqUAT8bfUALi8",
    authDomain: "curso-d7682.firebaseapp.com",
    projectId: "curso-d7682",
    storageBucket: "curso-d7682.appspot.com",
    messagingSenderId: "56158605264",
    appId: "1:56158605264:web:64e4370fc7da95baec73d5",
    measurementId: "G-SVB9YLCKN0"
  };




  const firebaseapp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseapp);

  export { db }; 