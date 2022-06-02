import React, {Fragment, useContext, useState} from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LanguageContext} from '../context/LanguageContext';
import TadlacLake from '../icons/TadlacLake';
import content from '../utils/content';
import styles, {
  NUNITOREGULAR,
  PRIMARY1,
  PRIMARY2,
  PRIMARY3,
  WINDOWWIDTH,
  COLOR0,
  COLOR10,
  DANGER,
  NUNITOBOLD,
  LIGHT1,
} from '../utils/styles';
import {DataContext} from '../context/DataContext';
import {
  Chart,
  Line,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';

const Details = () => {
  const {language} = useContext(LanguageContext);
  const {data, currentParameter, hourlyForecastData, dailyForecastData} =
    useContext(DataContext);
  const [isDaily, setIsDaily] = useState(false);
  const currentData = data[currentParameter];
  const hourlyData = hourlyForecastData[currentParameter];
  const dailyData = dailyForecastData[currentParameter];
  const [areaColor, setAreaColor] = useState({});
  const [chartCurr, setChartCurr] = useState(0);

  const toggleSwitch = () => {
    setIsDaily(prev => !prev);
  };
  if (!hourlyData || !dailyData) return <Fragment></Fragment>;
  return (
    <LinearGradient
      style={[styles.pt6, {height: 700}]}
      colors={[
        PRIMARY1,
        PRIMARY1,
        LIGHT1,
        LIGHT1,
        LIGHT1,
        LIGHT1,
        LIGHT1,
        PRIMARY1,
      ]}>
      <DetailsNav
        language={language}
        isDaily={isDaily}
        toggleSwitch={toggleSwitch}
      />
      <TadlacLake language={language} areaColor={areaColor} />
      <ChartHeader language={language} />

      <ChartComponent
        language={language}
        chartCurr={chartCurr}
        setChartCurr={setChartCurr}
        currentData={currentData}
        hourlyData={hourlyData}
        dailyData={dailyData}
        isDaily={isDaily}
        setAreaColor={setAreaColor}
        COLOR0={COLOR0}
        COLOR10={COLOR10}
      />
    </LinearGradient>
  );
};

const DetailsNav = React.memo(props => {
  const language = props.language;
  const isDaily = props.isDaily;
  const toggleSwitch = props.toggleSwitch;
  return (
    <View style={[styles.flexRow, styles.spaceBetween]}>
      <Text
        style={[
          styles.h2,
          styles.light1,
          styles.pb6,
          styles.pl6,
          {width: WINDOWWIDTH - 50},
        ]}>
        {
          content[language][
            `${isDaily ? 'DAILYDETAILSTITLE' : 'WEEKLYDETAILSTITLE'}`
          ]
        }
      </Text>
      <Switch
        trackColor={{false: PRIMARY2, true: PRIMARY3}}
        thumbColor="#f4f3f4"
        ios_backgroundColor="#f4f3f4"
        onValueChange={toggleSwitch}
        value={isDaily}
        style={styles.mb6}
      />
    </View>
  );
});

const ChartHeader = React.memo(props => {
  const language = props.language;
  return (
    <View
      style={[
        styles.flexRow,
        styles.flexEnd,
        styles.jCenter,
        styles.selfCenter,
        {
          height: 40,
          width: WINDOWWIDTH,
        },
      ]}>
      <Text style={[styles.p1, styles.mh6]}>
        {content[language].AREA} 1:&nbsp;
        <View
          style={[
            styles.backgroundColorPrimary1,
            styles.brCircle,
            {height: 10, width: 10},
          ]}
        />
      </Text>
      <Text style={[styles.p1, styles.mh6]}>
        {content[language].AREA} 2:&nbsp;
        <View
          style={[
            styles.backgroundColorPrimary2,
            styles.brCircle,
            {height: 10, width: 10},
          ]}
        />
      </Text>
      <Text style={[styles.p1, styles.mh6]}>
        {content[language].AREA} 3:&nbsp;
        <View
          style={[
            styles.backgroundColorPrimary3,
            styles.brCircle,
            {height: 10, width: 10},
          ]}
        />
      </Text>
    </View>
  );
});

const ChartComponent = React.memo(props => {
  const language = props.language;
  const isDaily = props.isDaily;
  const currentData = props.currentData;
  const hourlyData = [...props.hourlyData];
  const dailyData = [...props.dailyData];
  const setAreaColor = props.setAreaColor;
  const chartCurr = props.chartCurr;
  const setChartCurr = props.setChartCurr;
  const COLOR0 = props.COLOR0;
  const COLOR10 = props.COLOR10;
  hourlyData.unshift(currentData);
  dailyData.unshift(currentData);
  const xValues = [];
  const yValues = [];
  const data1 = isDaily
    ? hourlyData.map(i => {
        const x = new Date(i.timeGathered).getHours();
        const y = i.area1;
        xValues.push(x);
        yValues.push(y);
        return {y: y, x: x};
      })
    : dailyData.map(i => {
        const x = new Date(i.timeGathered).getDate();
        const y = i.area1;
        xValues.push(x);
        yValues.push(y);
        return {y: y, x: x};
      });
  const data2 = isDaily
    ? hourlyData.map(i => {
        const x = new Date(i.timeGathered).getHours();
        const y = i.area2;
        xValues.push(x);
        yValues.push(y);
        return {y: y, x: x};
      })
    : dailyData.map(i => {
        const x = new Date(i.timeGathered).getDate();
        const y = i.area2;
        xValues.push(x);
        yValues.push(y);
        return {y: y, x: x};
      });
  const data3 = isDaily
    ? hourlyData.map(i => {
        const x = new Date(i.timeGathered).getHours();
        const y = i.area3;
        xValues.push(x);
        yValues.push(y);
        return {y: y, x: x};
      })
    : dailyData.map(i => {
        const x = new Date(i.timeGathered).getDate();
        const y = i.area3;
        xValues.push(x);
        yValues.push(y);
        return {y: y, x: x};
      });

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const current = isDaily ? hourlyData[chartCurr] : dailyData[chartCurr];
  return (
    <Fragment>
      <Chart
        style={[
          styles.selfCenter,
          {
            height: 200,
            width: WINDOWWIDTH,
          },
        ]}
        padding={{left: 40, bottom: 30, right: 15, top: 5}}
        xDomain={{min: xMin, max: xMax}}
        yDomain={{min: yMin - 1, max: yMax + 1}}>
        <VerticalAxis
          tickCount={5}
          theme={{
            labels: {
              label: {
                rotation: -55,
                fontFamily: NUNITOREGULAR,
              },
              formatter: v => v.toFixed(2) + currentData.unit,
            },
          }}
        />
        <HorizontalAxis
          tickCount={6}
          theme={{
            labels: {
              label: {
                fontFamily: NUNITOREGULAR,
              },
              formatter: h => (isDaily ? h + ':00' : h),
            },
          }}
        />
        <Line
          data={data1}
          smoothing="bezier"
          tension={0.1}
          theme={{
            stroke: {color: PRIMARY1, width: 2},
            scatter: {
              default: {width: 10, height: 10, rx: 5, color: PRIMARY1},
              selected: {color: DANGER},
            },
          }}
          onTooltipSelect={(props, i) => {
            setChartCurr(i);
            findAreaColor(
              dailyData,
              hourlyData,
              isDaily,
              i,
              COLOR0,
              COLOR10,
              setAreaColor,
            );
          }}
        />
        <Line
          data={data2}
          smoothing="bezier"
          tension={0.1}
          theme={{
            stroke: {color: PRIMARY2, width: 2},
            scatter: {
              default: {width: 10, height: 10, rx: 5, color: PRIMARY2},
              selected: {color: DANGER},
            },
          }}
        />
        <Line
          data={data3}
          smoothing="bezier"
          tension={0.1}
          theme={{
            stroke: {color: PRIMARY3, width: 2},
            scatter: {
              default: {width: 10, height: 10, rx: 5, color: PRIMARY3},
              selected: {color: DANGER},
            },
          }}
        />
      </Chart>
      <View style={[styles.flexRow, styles.jCenter]}>
        <View style={styles.mh6}>
          <Text style={styles.p1}>
            {`${content[language].AREA} 1: `}
            <Text style={{fontFamily: NUNITOBOLD}}>
              {current.area1}
              {current.unit}
            </Text>
          </Text>
          <Text style={[styles.p1, styles.mt3]}>
            {`${content[language].AREA} 2: `}
            <Text style={{fontFamily: NUNITOBOLD}}>
              {current.area3}
              {current.unit}
            </Text>
          </Text>
        </View>
        <View style={styles.mh6}>
          <Text style={styles.p1}>
            {`${content[language].AREA} 3: `}
            <Text style={{fontFamily: NUNITOBOLD}}>
              {current.area2}
              {current.unit}
            </Text>
          </Text>
          <Text style={[styles.p1, styles.mt3]}>
            {`${content[language].AVERAGE}: `}
            <Text style={{fontFamily: NUNITOBOLD}}>
              {current.average}
              {current.unit}
            </Text>
          </Text>
        </View>
      </View>
    </Fragment>
  );
});
const findAreaColor = (
  dailyData,
  hourlyData,
  isDaily,
  i,
  COLOR0,
  COLOR10,
  setAreaColor,
) => {
  const x = i;
  const areaColor = {
    area1Color0: undefined,
    area1Color10: undefined,
    area2Color0: undefined,
    area2Color10: undefined,
    area3Color0: undefined,
    area3Color10: undefined,
  };
  const current = isDaily ? hourlyData[x] : dailyData[x];
  for (
    let i = 0, j = 0;
    i <= current.highValue;
    i = parseFloat((i + current.scaleInterval).toFixed(3)), j += 1
  ) {
    // this logic is up for debate, i may be confused
    if (i >= current.highValue) j -= 1;
    // if (i <= current.lowValue) j = 0;
    if (i <= current.area1) {
      areaColor.area1Color0 = COLOR0[j];
      areaColor.area1Color10 = COLOR10[j];
    }
    if (i <= current.area2) {
      areaColor.area2Color0 = COLOR0[j];
      areaColor.area2Color10 = COLOR10[j];
    }
    if (i <= current.area3) {
      areaColor.area3Color0 = COLOR0[j];
      areaColor.area3Color10 = COLOR10[j];
    }
  }
  setAreaColor(areaColor);
};

export default React.memo(Details);
