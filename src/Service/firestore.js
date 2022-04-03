import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../lib/firebase';

const PROJECT_COLLOCATION_KEY = 'projects';

export const addProject = async (project) => {
  await addDoc(collection(firestore, PROJECT_COLLOCATION_KEY), project);
};

export const getAllProjectByUserId = async (userId) => {
  const dosRef = query(
    collection(firestore, PROJECT_COLLOCATION_KEY),
    where('userId', '==', userId)
  );

  const querySnapshot = await getDocs(dosRef);

  const data = [];

  querySnapshot.forEach((doc) => {
    const project = { ...doc.data(), id: doc.id };

    data.push(project);
  });

  return data;
};
