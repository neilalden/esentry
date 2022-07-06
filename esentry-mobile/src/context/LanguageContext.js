import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, createContext, useEffect} from 'react';

export const LanguageContext = createContext();

const LanguageContextProvider = props => {
  const [language, setLanguage] = useState('ENGLISH');
  useEffect(() => {
    getLanguagePreference();
  }, []);

  // EVENTS
  const getLanguagePreference = async () => {
    try {
      const json = await AsyncStorage.getItem('language');
      const res = json != null ? JSON.parse(json) : null;
      if (res) setLanguage(res.language);
    } catch (e) {
      console.log('getLanguagePreference', e);
    }
  };
  const toggleLanguagePreference = async () => {
    const isFilipino = language === 'FILIPINO';
    if (isFilipino) setLanguage('ENGLISH');
    else setLanguage('FILIPINO');

    try {
      const json = JSON.stringify({
        language: isFilipino ? 'ENGLISH' : 'FILIPINO',
      });
      await AsyncStorage.setItem('language', json);
    } catch (e) {
      console.log('toggleLanguagePreference', e);
    }
  };
  return (
    <LanguageContext.Provider value={{language, toggleLanguagePreference}}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
