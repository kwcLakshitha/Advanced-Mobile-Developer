import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBc6JRUgoBFcNlcTbzxPI6H81rL-sAXlj4",
  authDomain: "voteapp-628df.firebaseapp.com",
  projectId: "voteapp-628df",
  storageBucket: "voteapp-628df.firebasestorage.app",
  messagingSenderId: "1081960402443",
  appId: "1:1081960402443:web:9ac4ccaba1fc16821e810e",
  measurementId: "G-G2RQKXRTSJ"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase based on standard web SDK.
// Note: getReactNativePersistence is not exported in this version.
// If persistence issues arise, consider manual persistence implementation or checking @react-native-firebase/auth.
export const auth = getAuth(app);
