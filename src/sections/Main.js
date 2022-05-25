import React, {useContext} from 'react';
import Header from './Header';
import Loading from './Loading';
import WavesIco from '../icons/WavesIco';
import {DataContext} from '../context/DataContext';
import GestureRecognizer from 'react-native-swipe-gestures';
import {ScrollView} from 'react-native';
import Forecast from './Forecast';
import Details from './Details';

const Main = () => {
  console.log('Rerendering Main.js');
  const {data, currentParameter, changeCurrentParameter} =
    useContext(DataContext);
  const parameter = data[currentParameter];

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

  if (!parameter) return <Loading />;
  return (
    <ScrollView>
      <GestureRecognizer
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        config={config}>
        <Header />
      </GestureRecognizer>
      <WavesIco width={'200%'} animate={true} loop={!false} />
      <Forecast />
      <WavesIco width={'200%'} animate={true} loop={!false} invert={true} />
      <Details />
    </ScrollView>
  );
};

export default Main;
