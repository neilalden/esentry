import firestore from '@react-native-firebase/firestore';
import TemperatureObj from '../objects/TemperatureObj';
import PHObj from '../objects/PHObj';
import SalinityObj from '../objects/SalinityObj';
import AmmoniumObj from '../objects/AmmoniumObj';
import NitrateObj from '../objects/NitrateObj';
import ChlorideObj from '../objects/ChlorideObj';

const fetchData = async () => {
  const dataArr = [];
  dataArr.push(new TemperatureObj(24.96, 24.6, 24.81));
  dataArr.push(new PHObj(9.44, 9.43, 9.44));
  dataArr.push(new SalinityObj(-0.02, -0.02, -0.02));
  dataArr.push(new AmmoniumObj(45.98, 45.9, 45.97));
  dataArr.push(new NitrateObj(44.98, 44.93, 44.92));
  dataArr.push(new ChlorideObj(0, 0, 0));

  // firestore()
  //   .collection('records')
  //   .get()
  //   .then(querySnapshot => {
  //     querySnapshot.forEach(doc => {
  //       console.log(doc.data());
  //     });
  //   })
  //   .catch(e => console.log(e));
  return dataArr;
};
const fetchForecastData = async type => {
  const currentDate = new Date();
  const res = [];
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    const d =
      type === 'HOURS'
        ? new Date().setHours(currentDate.getHours() + i)
        : new Date().setDate(currentDate.getDate() + i);
    const highValue = new TemperatureObj().highValue;
    const area1 = randomInt(highValue);
    const area2 = randomInt(highValue);
    const area3 = randomInt(highValue);
    arr.push(new TemperatureObj(area1, area2, area3, d));
  }
  res.push(arr);
  arr = [];
  for (let i = 1; i <= 5; i++) {
    const d =
      type === 'HOURS'
        ? new Date().setHours(currentDate.getHours() + i)
        : new Date().setDate(currentDate.getDate() + i);
    const highValue = new PHObj().highValue;
    const area1 = randomInt(highValue);
    const area2 = randomInt(highValue);
    const area3 = randomInt(highValue);
    arr.push(new PHObj(area1, area2, area3, d));
  }
  res.push(arr);
  arr = [];
  for (let i = 1; i <= 5; i++) {
    const d =
      type === 'HOURS'
        ? new Date().setHours(currentDate.getHours() + i)
        : new Date().setDate(currentDate.getDate() + i);
    const highValue = new SalinityObj().highValue;
    const area1 = randomInt(highValue);
    const area2 = randomInt(highValue);
    const area3 = randomInt(highValue);
    arr.push(new SalinityObj(area1, area2, area3, d));
  }
  res.push(arr);
  arr = [];
  for (let i = 1; i <= 5; i++) {
    const d =
      type === 'HOURS'
        ? new Date().setHours(currentDate.getHours() + i)
        : new Date().setDate(currentDate.getDate() + i);
    const highValue = new AmmoniumObj().highValue;
    const area1 = randomInt(highValue);
    const area2 = randomInt(highValue);
    const area3 = randomInt(highValue);
    arr.push(new AmmoniumObj(area1, area2, area3, d));
  }
  res.push(arr);
  arr = [];
  for (let i = 1; i <= 5; i++) {
    const d =
      type === 'HOURS'
        ? new Date().setHours(currentDate.getHours() + i)
        : new Date().setDate(currentDate.getDate() + i);
    const highValue = new NitrateObj().highValue;
    const area1 = randomInt(highValue);
    const area2 = randomInt(highValue);
    const area3 = randomInt(highValue);
    arr.push(new NitrateObj(area1, area2, area3, d));
  }
  res.push(arr);
  arr = [];
  for (let i = 1; i <= 5; i++) {
    const d =
      type === 'HOURS'
        ? new Date().setHours(currentDate.getHours() + i)
        : new Date().setDate(currentDate.getDate() + i);
    const highValue = new ChlorideObj().highValue;
    const area1 = randomInt(highValue);
    const area2 = randomInt(highValue);
    const area3 = randomInt(highValue);
    arr.push(new ChlorideObj(area1, area2, area3, d));
  }
  res.push(arr);
  console.log('fetchForecastData', type);

  return res;
};

const randomInt = max => {
  return Math.floor(Math.random() * (max + max - 0 + 1) + 0);
};

export {fetchData, fetchForecastData};
