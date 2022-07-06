import React, {useContext} from 'react';
import Header from './Header';
import Loading from './Loading';
import Waves from '../icons/Waves';
import {DataContext} from '../context/DataContext';
import GestureRecognizer from 'react-native-swipe-gestures';
import {ScrollView} from 'react-native';
import Forecast from './Forecast';
import Details from './Details';
import Overview from './Overview';

const Main = () => {
  const {
    data,
    currentParameter,
    changeCurrentParameter,
    hourlyForecastData,
    dailyForecastData,
  } = useContext(DataContext);

  const onSwipeLeft = () => {
    if (currentParameter < data.length - 1)
      changeCurrentParameter(prev => prev + 1);
    else changeCurrentParameter(0);
  };

  const onSwipeRight = () => {
    if (currentParameter > 0) changeCurrentParameter(prev => prev - 1);
    else changeCurrentParameter(data.length - 1);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  if (
    !data ||
    !hourlyForecastData ||
    !dailyForecastData ||
    data.length === 0 ||
    hourlyForecastData.length === 0 ||
    dailyForecastData.length === 0
  )
    return <Loading />;
  return (
    <ScrollView>
      <GestureRecognizer
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        config={config}>
        <Header />
      </GestureRecognizer>
      <Waves width={'200%'} animate={true} loop={!false} />
      <Forecast />
      <Details />
      <Overview />
    </ScrollView>
  );
};

export default React.memo(Main);
