import {API_URL} from '@env';
import PHObj from '../objects/PHObj';
import TemperatureObj from '../objects/TemperatureObj';
const fetchData = async () => {
  const dataArr = [];
  dataArr.push(new TemperatureObj(24.96, 24.6, 24.81));
  dataArr.push(new PHObj(9.44, 9.43, 9.44));

  return dataArr;
};
const fetchForecastData = async () => {
  return await '{}';
};

export {fetchData, fetchForecastData};
/*
 {
  area1: {
    temperature: 24.96,
    pH: 9.44,
    salinity: -0.02,
    ammonium: 45.9,
    nitrate: 45.93,
    chloride: 0,
  },
  area2: {
    temperature: 24.6,
    pH: 9.43,
    salinity: -0.02,
    ammonium: 45.98,
    nitrate: 45.91,
    chloride: 0,
  },
  area3: {
    temperature: 24.81,
    pH: 9.44,
    salinity: -0.02,
    ammonium: 45.77,
    nitrate: 45.98,
    chloride: 0,
  },
}
*/
