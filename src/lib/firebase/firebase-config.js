// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyADf_UOFCWH-8QgeieQp_9NVhaffvB2HdA",
//   authDomain: "bijed-f265e.firebaseapp.com",
//   projectId: "bijed-f265e",
//   storageBucket: "bijed-f265e.appspot.com",
//   messagingSenderId: "344775849649",
//   appId: "1:344775849649:web:31ef11a9a261aecdb5d490"
// };

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: 'bijed-f265e.appspot.com',
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
