import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc
} from 'firebase/firestore';
import app from './index.js';

const db = getFirestore(app);
const errorDefault = {
  status: "failed",
  message: "Вибачте, виникла помилка на сервері."
}


export async function addData(path, body) {
  try {
    const docRef = await addDoc(collection(db, ...path), body);
    return docRef;
  } catch (e) {
    console.log(e);

    return errorDefault
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
    return errorDefault
  }
}