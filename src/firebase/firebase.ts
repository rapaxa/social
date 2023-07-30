import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import exp from "constants";


interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

const firebaseConfig = {
    apiKey: "AIzaSyDFTWPd7CAFUBhUzQbn9K8KgH1bb2XnM-M",
    authDomain: "my-social-5cd7b.firebaseapp.com",
    projectId: "my-social-5cd7b",
    storageBucket: "my-social-5cd7b.appspot.com",
    messagingSenderId: "721399813963",
    appId: "1:721399813963:web:2ee89ade6e3cb258d63ace"
};

const app = initializeApp(firebaseConfig);

export  const firestore = getFirestore(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
