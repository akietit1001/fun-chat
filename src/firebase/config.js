import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDMv0tvCvtf0T2-6OOUuG0O4lcEHh6M47k",
    authDomain: "chat-app-a9b77.firebaseapp.com",
    projectId: "chat-app-a9b77",
    storageBucket: "chat-app-a9b77.appspot.com",
    messagingSenderId: "974941698508",
    appId: "1:974941698508:web:ff90fef907eeac8c9a0569",
    measurementId: "G-9CKCYX008R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
    // auth.useEmulator('http://localhost:9099');
    // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;