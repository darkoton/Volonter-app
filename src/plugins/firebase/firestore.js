import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where, or,
  deleteDoc
} from 'firebase/firestore';
import app from './index.js';

const db = getFirestore(app);
const errorDefault = {
  status: "failed",
  message: "Вибачте, виникла помилка на сервері."
}

const getWheres = (wheres = []) => {
  if (!wheres) {
    return [];
  }

  return wheres.map(w => {
    return where(...w);
  });
};

const getOrs = (ors = []) => {
  if (!ors) {
    return [];
  }

  const result = ors.map(o => {
    return or(...getWheres(o.wheres), ...getOrs(o.ors));
  });
  return result;
};

const getOther = other => {
  if (!other) {
    return [];
  }
  return other;
};

const getQuery = (path, queries) => {
  let constraints = [];

  if (queries) {
    constraints.push(
      ...getWheres(queries.wheres),
      ...getOrs(queries.ors),
      ...getOther(queries.other),
    );
  }

  if (!path.length % 2) {
    return query(doc(db, ...path), ...constraints);
  }
  return query(collection(db, ...path), ...constraints);
};

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
  } catch (e) {
    console.log(e);

    throw errorDefault
  }
}

export async function getDatas(path, queries, options = {}) {
  try {
    const q = getQuery(path, queries);
    const querySnapshot = await getDocs(q);

    const result = {};
    if (options.getDoc) {
      result.data = querySnapshot.docs;
    } else {
      if (options.id) {
        result.data = querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
      } else {
        result.data = querySnapshot.docs.map(doc => {
          return doc.data();
        });
      }
    }

    if (options.last) {
      result.last = querySnapshot.docs[querySnapshot.docs.length - 1];
    }

    return result;
  } catch (e) {
    console.log(e);

    throw errorDefault
  }
}

export async function deleteData(path, queries) {
  try {


    if (queries && (path.length % 3 || path.length == 1)) {
      const batch = writeBatch(db);

      const { data } = await getDatas(path, queries, { getDoc: true });
      data.forEach(async data => {
        batch.delete(data.ref);
      });

      await batch.commit();

      return {
        type: 'success',
        message: 'Delete is complete',
      };
    } else {
      await deleteDoc(doc(db, ...path));
      return null;
    }
  } catch (e) {
    console.log(e);

    throw errorDefault
  }
}
