import { collection, query, where, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config'

export const fetchData = async(myCollection) => {
    let data
    const querySnapshot = await getDocs(collection(db, myCollection));
    if(myCollection === 'products'){
        data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            date: doc.data().date.toMillis(),
        }));
    }else{
        data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
    }
    return data
}

export const fetchDataWithProperties = async (myCollection, prop, compareProps) => {
    const q = query(collection(db, myCollection), where(prop, '==', compareProps));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        date: doc.data().date.toMillis(),
    }));
    // Lưu dữ liệu vào state hoặc biến của component
    return data
};

export const addNewDocument = async(myCollection, data) =>{
    try{
        const docRef = await addDoc(collection(db, myCollection), data);
        console.log(docRef);
    }catch(err){
        console.log(err);
    }
}

export const deleteDocument = async(myCollection, id) => {
    try{
        const docRef = doc(db, myCollection, id)
        await deleteDoc(docRef)
    }catch(err){
        console.log(err);
    }
}

export const updateDocument = async (collectionName, documentId, newData) => {
    try {
      const documentRef = doc(db, collectionName, documentId);
      await updateDoc(documentRef, newData);
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document:", error);
      throw new Error(error);
    }
  };