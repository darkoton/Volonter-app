import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { addData } from "./firestore.js";
import app from './index.js';

const auth = getAuth(app);
// Initialize Firebase Authentication and get a reference to the service
export default auth

export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === "auth/invalid-email") {
        return {
          status: "failed",
          message: "Недійсна електронна адреса."
        }
      } else if (errorCode === "auth/email-already-in-use") {
        return {
          status: "failed",
          message: "Цей Email вже використовується."
        }
      } else if (errorCode === "auth/weak-password") {
        return {
          status: "failed",
          message: "Пароль має бути не менше 6 символів."
        }
      } else {
        return error
      }


      // ..
    })
}