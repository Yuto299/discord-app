import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBK5koqny1HU4NJ_TzDjhZQLp2TQz7BBaU',
  authDomain: 'discord-clone-afbc4.firebaseapp.com',
  projectId: 'discord-clone-afbc4',
  storageBucket: 'discord-clone-afbc4.firebasestorage.app',
  messagingSenderId: '931942893675',
  appId: '1:931942893675:web:a013f5e2b7644818f6092e',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
