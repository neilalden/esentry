import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, createContext, useEffect} from 'react';
import {fetchData, fetchForecastData} from '../utils/API';
export const DataContext = createContext();

const DataContextProvider = props => {
  const [data, setData] = useState([]);
  const [hourlyForecastData, setHourlyForecastData] = useState([]);
  const [dailyForecastData, setDailyForecastData] = useState([]);
  const [currentParameter, setCurrentParameter] = useState(0);
  useEffect(() => {
    const handleFetch = async () => {
      fetchData().then(res => {
        setData(res);
        fetchForecastData('HOURS').then(ress => {
          setHourlyForecastData(ress);
          fetchForecastData('DAYS').then(resss => {
            setDailyForecastData(resss);
          });
        });
      });
    };
    handleFetch();
  }, []);

  const changeCurrentParameter = index => {
    setCurrentParameter(index);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        hourlyForecastData,
        dailyForecastData,
        currentParameter,
        changeCurrentParameter,
      }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
