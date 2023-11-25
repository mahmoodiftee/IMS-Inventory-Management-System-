import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD-TCFaxQwTaXY4QXnlKCyezLu3nRexbvM",
  authDomain: "inventory-management-sys-85215.firebaseapp.com",
  projectId: "inventory-management-sys-85215",
  storageBucket: "inventory-management-sys-85215.appspot.com",
  messagingSenderId: "399647786495",
  appId: "1:399647786495:web:ad9d842112b9b02fc713ca"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;