import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
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

      if (errorCode === "auth/invalid-email") {
        throw {
          status: "failed",
          message: "Недійсна електронна адреса."
        }
      } else if (errorCode === "auth/email-already-in-use") {
        throw {
          status: "failed",
          message: "Цей Email вже використовується."
        }
      } else if (errorCode === "auth/weak-password") {
        throw {
          status: "failed",
          message: "Пароль має бути не менше 6 символів."
        }
      } else {
        throw error
      }
    })
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/invalid-value-(email)") {
        throw {
          status: "failed",
          message: "Не правильна електронна адреса."
        }
      } else if (errorCode === "auth/invalid-credential") {
        throw {
          status: "failed",
          message: "Недійсні облікові дані."
        }
      } else {
        throw error
      }
    });
}

export function logOut() {
  return signOut(auth).then(() => {
    localStorage.removeItem('accessToken')
  }).catch(() => {
    throw {
      status: "failed",
      message: "Сталася помилка під час виходу."
    }
  })
}