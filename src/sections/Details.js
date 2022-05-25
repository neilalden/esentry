import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {LanguageContext} from '../context/LanguageContext';
import TadlacLakeIco from '../icons/TadlacLakeIco';
import content from '../utils/content';
import styles, {
  NUNITOREGULAR,
  PRIMARY1,
  PRIMARY2,
  PRIMARY3,
  WINDOWWIDTH,
} from '../utils/styles';
import {DataContext} from '../context/DataContext';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';

const Details = () => {
  const {language} = useContext(LanguageContext);
  const {data, currentParameter, changeCurrentParameter} =
    useContext(DataContext);
  const parameter = data[currentParameter];
  return (
    <View style={[{height: 700}]}>
      <Text style={[styles.h2, styles.pb6, styles.ph6]}>
        {content[language].DETAILSTITLE}
      </Text>
      <TadlacLakeIco language={language} />
      <ChartIco />
    </View>
  );
};

const ChartIco = () => {
  const data1 = [
    {x: 0, y: 5},
    {x: 3, y: 6},
    {x: 5, y: 7},
    {x: 6, y: 5},
    {x: 7, y: 6},
    {x: 10, y: 10},
  ];
  const data2 = [
    {x: 0, y: 7},
    {x: 3, y: 9},
    {x: 5, y: 3},
    {x: 6, y: 6},
    {x: 7, y: 8},
    {x: 10, y: 9},
  ];
  return (
    <Chart
      style={[
        styles.selfCenter,
        {
          height: 200,
          width: WINDOWWIDTH,
        },
      ]}
      padding={{left: 40, bottom: 20, right: 20, top: 20}}>
      <VerticalAxis
        tickCount={6}
        theme={{labels: {formatter: v => v.toFixed(2)}}}
      />
      <HorizontalAxis
        tickCount={6}
        theme={{labels: {formatter: v => v.toFixed(2)}}}
      />
      <Line
        data={data1}
        tooltipComponent={<Tooltip />}
        smoothing="bezier"
        tension={0.2}
        theme={{
          stroke: {color: PRIMARY2, width: 2},
          scatter: {
            default: {width: 8, height: 8, rx: 4, color: PRIMARY1},
            selected: {color: PRIMARY3},
          },
        }}
      />
      <Line
        data={data2}
        smoothing="bezier"
        tension={0.2}
        theme={{
          stroke: {color: PRIMARY2, width: 2},
          scatter: {
            default: {width: 8, height: 8, rx: 4, color: PRIMARY1},
            selected: {color: PRIMARY3},
          },
        }}
      />
    </Chart>
  );
};

const Tooltip = props => {
  const value = props.value.y;
  return (
    <View>
      <Text style={[styles.p3]}>{value}</Text>
    </View>
  );
};

export default Details;
