import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDpNdsCc273wRjvRJas70DExRjH2d_JYnM",
    authDomain: "denytube-51702.firebaseapp.com",
    projectId: "denytube-51702",
    storageBucket: "denytube-51702.appspot.com",
    messagingSenderId: "698582323178",
    appId: "1:698582323178:web:acb2da959e0228b9a56c93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export default app