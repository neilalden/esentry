import firestore from '@react-native-firebase/firestore';
import Temperature from '../objects/Temperature';
import PH from '../objects/PH';
import Salinity from '../objects/Salinity';
import Ammonium from '../objects/Ammonium';
import Nitrate from '../objects/Nitrate';
import Chloride from '../objects/Chloride';

const fetchData = async () => {
  try {
    let temp, ph, sal, amm, nit, chl;
    const querySnapshot = await firestore().collection('records').get();
    querySnapshot.forEach(doc => {
      const data = doc.data();
      if (data.parameter === 'Temperature') {
        temp = new Temperature(
          data.area1,
          data.area2,
          data.area3,
          data.timeGathered.toDate(),
        );
      }
      if (data.parameter === 'pH') {
        ph = new PH(
          data.area1,
          data.area2,
          data.area3,
          data.timeGathered.toDate(),
        );
      }
      if (data.parameter === 'Salinity') {
        sal = new Salinity(
          data.area1,
          data.area2,
          data.area3,
          data.timeGathered.toDate(),
        );
      }
      if (data.parameter === 'Ammonium') {
        amm = new Ammonium(
          data.area1,
          data.area2,
          data.area3,
          data.timeGathered.toDate(),
        );
      }
      if (data.parameter === 'Nitrate') {
        nit = new Nitrate(
          data.area1,
          data.area2,
          data.area3,
          data.timeGathered.toDate(),
        );
      }
      if (data.parameter === 'Chloride') {
        chl = new Chloride(
          data.area1,
          data.area2,
          data.area3,
          data.timeGathered.toDate(),
        );
      }
    });
    return [temp, ph, sal, amm, nit, chl];
  } catch (e) {
    console.log('fetchData', e);
  }
};
const fetchForecastData = async type => {
  const temp = [],
    ph = [],
    sal = [],
    amm = [],
    nit = [],
    chl = [];
  const ref = type === 'HOURS' ? 'hourly_predictions' : 'daily_predictions';
  try {
    const querySnapshot = await firestore()
      .collection(ref)
      .orderBy('timeGathered')
      .get();
    querySnapshot.forEach(doc => {
      const data = doc.data();
      if (data.parameter === 'Temperature') {
        temp.push(
          new Temperature(
            data.area1,
            data.area2,
            data.area3,
            data.timeGathered.toDate(),
          ),
        );
      }
      if (data.parameter === 'pH') {
        ph.push(
          new PH(
            data.area1,
            data.area2,
            data.area3,
            data.timeGathered.toDate(),
          ),
        );
      }
      if (data.parameter === 'Salinity') {
        sal.push(
          new Salinity(
            data.area1,
            data.area2,
            data.area3,
            data.timeGathered.toDate(),
          ),
        );
      }
      if (data.parameter === 'Ammonium') {
        amm.push(
          new Ammonium(
            data.area1,
            data.area2,
            data.area3,
            data.timeGathered.toDate(),
          ),
        );
      }
      if (data.parameter === 'Nitrate') {
        nit.push(
          new Nitrate(
            data.area1,
            data.area2,
            data.area3,
            data.timeGathered.toDate(),
          ),
        );
      }
      if (data.parameter === 'Chloride') {
        chl.push(
          new Chloride(
            data.area1,
            data.area2,
            data.area3,
            data.timeGathered.toDate(),
          ),
        );
      }
    });
    return [temp, ph, sal, amm, nit, chl];
  } catch (e) {
    console.log('fetchForecastData' + type, e);
  }
};

export {fetchData, fetchForecastData};
