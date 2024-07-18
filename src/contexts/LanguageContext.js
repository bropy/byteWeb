import { createContext, useState, useContext, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAcjWB4G-KuHkt5j7_few5Xo4AQuHk0o4g",
    authDomain: "byte-e2e91.firebaseapp.com",
    projectId: "byte-e2e91",
    storageBucket: "byte-e2e91.appspot.com",
    messagingSenderId: "569534613888",
    appId: "1:569534613888:web:57e98238d76f56b15c5965"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ua');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    fetchTranslations(lang);
  }, [lang]);

  async function fetchTranslations(selectedLang) {
    const docRef = doc(db, 'lang', selectedLang);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTranslations(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}