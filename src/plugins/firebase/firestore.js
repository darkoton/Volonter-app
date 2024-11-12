import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc
} from 'firebase/firestore';
import app from './index.js';

const db = getFirestore(app);
const errorDefault = {
  status: "failed",
  message: "Вибачте, виникла помилка на сервері."
}

export async function setData(path, body) {
  try {
    await setDoc(doc(db, ...path), body);
  } catch (e) {
    console.log(e);

    throw errorDefault
  }
}

export async function addData(path, body) {
  try {
    const docRef = await addDoc(collection(db, ...path), body);
    return docRef;
  } catch (e) {
    console.log(e);

    throw errorDefault
  }
}

export async function getData(path, options = {}) {
  try {
    const querySnapshot = await getDoc(doc(db, ...path));

    if (options.getDoc) {
      return querySnapshot.docs;
    }

    return querySnapshot.data();
  } catch {
    console.log(e);

    throw errorDefault
  }
}