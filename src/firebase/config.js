// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8kYZSoVYN85GeMe9c7onaQi2C39szC5E",
  authDomain: "fir-test-2e2c5.firebaseapp.com",
  projectId: "fir-test-2e2c5",
  storageBucket: "fir-test-2e2c5.firebasestorage.app",
  messagingSenderId: "618700386147",
  appId: "1:618700386147:web:c840de8857c94cc2e16d56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
