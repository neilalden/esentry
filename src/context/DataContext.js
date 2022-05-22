import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, createContext, useEffect} from 'react';
import {fetchData} from '../utils/API';
export const DataContext = createContext();

const DataContextProvider = props => {
  const [data, setData] = useState([]);
  const [currentParameter, setCurrentParameter] = useState(0);
  useEffect(() => {
    const handleFetch = async () => {
      setData(await fetchData());
    };
    setTimeout(() => handleFetch(), 3000);
  }, []);

  const changeCurrentParameter = index => {
    setCurrentParameter(index);
  };
  // EVENTS

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        currentParameter,
        setCurrentParameter,
        changeCurrentParameter,
      }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
