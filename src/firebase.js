// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnUXGPZ74WfRqmMYLp6woS3lLW1PVc0wM",
  authDomain: "keepfresh-8ba98.firebaseapp.com",
  projectId: "keepfresh-8ba98",
  storageBucket: "keepfresh-8ba98.appspot.com",
  messagingSenderId: "244658699814",
  appId: "1:244658699814:web:55fde308ffaf760b8c70e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// // Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }
