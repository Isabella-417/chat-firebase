import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp
} from 'firebase/firestore'
import { UserAuthenticated } from './interfaces'

import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID
} from './variables'

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export const sendMessage = async (message: string): Promise<void> => {
  const { uid, displayName, photoURL } = auth.currentUser as UserAuthenticated
  await addDoc(collection(db, 'messages'), {
    text: message,
    name: displayName,
    avatar: photoURL,
    createdAt: serverTimestamp(),
    uid
  })
}
