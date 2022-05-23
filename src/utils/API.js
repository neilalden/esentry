import firestore from '@react-native-firebase/firestore';
import TemperatureObj from '../objects/TemperatureObj';
import PHObj from '../objects/PHObj';
import SalinityObj from '../objects/SalinityObj';
import AmmoniumObj from '../objects/AmmoniumObj';
import NitrateObj from '../objects/NitrateObj';
import ChlorideObj from '../objects/ChlorideObj';

const fetchData = async () => {
  // firestore()
  //   .collection('records')
  //   .get()
  //   .then(querySnapshot => {
  //     querySnapshot.forEach(doc => {
  //       console.log(doc.data());
  //     });
  //   })
  //   .catch(e => console.log(e));

  const dataArr = [];
  dataArr.push(new TemperatureObj(24.96, 24.6, 24.81));
  dataArr.push(new PHObj(9.44, 9.43, 9.44));
  dataArr.push(new SalinityObj(-0.02, -0.02, -0.02));
  dataArr.push(new AmmoniumObj(45.98, 45.9, 45.97));
  dataArr.push(new NitrateObj(44.98, 44.93, 44.92));
  dataArr.push(new ChlorideObj(0, 0, 0));

  return dataArr;
};
const fetchHourlyForecastData = async () => {
  return [];
};

const fetchDailyForecastData = async () => {
  return [];
};

export {fetchData, fetchHourlyForecastData, fetchDailyForecastData};
