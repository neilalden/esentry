import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {LanguageContext} from '../context/LanguageContext';
import content from '../utils/content';
import styles from '../utils/styles';
import {DataContext} from '../context/DataContext';

const Forecast = () => {
  const {language} = useContext(LanguageContext);
  const {hourlyForecastData, dailyForecastData, currentParameter} =
    useContext(DataContext);
  const hourly = hourlyForecastData[currentParameter];
  const daily = dailyForecastData[currentParameter];

  return (
    <View
      style={[
        styles.pv6,
        styles.ph6,
        styles.backgroundColorPrimary1,
        {height: 550},
      ]}>
      <Text style={[styles.h2, styles.light1, styles.mb6]}>
        {content[language].DAYFORECASTTITLE}
      </Text>
      <HourlyForecast hourly={hourly} language={language} />
      <Text style={[styles.h2, styles.light1, styles.mv6]}>
        {content[language].WEEKFORECASTTITLE}
      </Text>
      <DailyForecast daily={daily} language={language} />
    </View>
  );
};

const HourlyForecast = React.memo(props => {
  const hourly = props.hourly;
  return (
    <View
      style={[
        styles.glass,
        styles.flexRow,
        styles.spaceBetween,
        {height: 120},
      ]}>
      {hourly &&
        hourly.map((item, index) => {
          const props = {
            paramName: item.name,
            level: item.getLevel(),
            height: '45%',
            animate: false,
          };
          return (
            <View key={index} style={[styles.mh1, styles.viewCenter]}>
              <Text style={[styles.p2, styles.pb6, styles.light1]}>
                {item.getTime()}
              </Text>
              {item.getIcon(props)}
              <Text style={[styles.p3, styles.pt6, styles.light1]}>
                {`${item.average}${item.unit}`}
              </Text>
            </View>
          );
        })}
    </View>
  );
});

const DailyForecast = React.memo(props => {
  const daily = props.daily;
  const language = props.language;
  return (
    <View style={[styles.glass, styles.spaceBetween, {height: 280}]}>
      {daily &&
        daily.map((item, index) => {
          const props = {
            paramName: item.name,
            level: item.getLevel(),
            height: '75%',
            animate: false,
          };
          return (
            <View
              key={index}
              style={[
                styles.mh1,
                styles.flexRow,
                styles.viewCenter,
                styles.spaceBetween,
                {height: 50},
              ]}>
              <Text style={[styles.p1, styles.mh3, styles.light1]}>
                {item.getDay(language)}
              </Text>
              <Text style={[styles.p1, styles.mh3, styles.light1]}>
                {item.getDayOfWeek(language)}
              </Text>
              <View
                style={[
                  styles.flexRow,
                  styles.viewCenter,
                  {height: 50, width: 120},
                ]}>
                {item.getIcon(props)}
                <Text style={[styles.p2, styles.light1]}>
                  {`${item.average}${item.unit}`}
                </Text>
              </View>
            </View>
          );
        })}
    </View>
  );
});

export default React.memo(Forecast);
