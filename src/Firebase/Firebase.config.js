
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAg8gz4YFivZAUNlSEynnQr2Z5dn1cuo0c",
  authDomain: "green-chilli-9f328.firebaseapp.com",
  projectId: "green-chilli-9f328",
  storageBucket: "green-chilli-9f328.appspot.com",
  messagingSenderId: "592104670602",
  appId: "1:592104670602:web:5ce83590574071aaafb473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth