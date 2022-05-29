import React, {Fragment} from 'react';
import content from '../utils/content';
import Ammonium from '../icons/Ammonium';
import Chloride from '../icons/Chloride';
import Nitrate from '../icons/Nitrate';
import PH from '../icons/PH';
import Salinity from '../icons/Salinity';
import Temperature from '../icons/Temperature';
import {Image, View} from 'react-native';
class Parameter {
  constructor(
    area1,
    area2,
    area3,
    timeGathered,
    lowValue,
    highValue,
    shortName,
  ) {
    this.average = calcAreaAverage(area1, area2, area3);
    this.area1 = area1;
    this.area2 = area2;
    this.area3 = area3;
    this.timeGathered = timeGathered;
    this.lowValue = lowValue;
    this.highValue = highValue;
    this.shortName = shortName;
  }
  getLevel() {
    if (this.average < this.lowValue) return 1;
    if (this.average >= this.lowValue && this.average <= this.highValue)
      return 2;
    if (this.average > this.highValue) return 3;
  }
  getDescription(language) {
    return content[language][`${this.shortName}LVL${this.getLevel()}`];
  }
  getTime() {
    const DATETIME = new Date(this.timeGathered);
    const hour = DATETIME.getHours();
    const minute = DATETIME.getMinutes();
    const ampm = hour > 12 ? 'pm' : 'am';
    return `${hour}:00`;
  }
  getDay(language) {
    const DATETIME = new Date(this.timeGathered);
    const day = DATETIME.getDate();
    const month = DATETIME.getMonth();
    return `${content[language].MONTHS[month]}/${day}`;
  }
  getDayOfWeek(language) {
    const DATETIME = new Date(this.timeGathered);
    const dayOfWeek = DATETIME.getDay();
    return `${content[language].WEEKS[dayOfWeek]}`;
  }
  getIcon(props) {
    const paramName = props.paramName;
    const level = props.level ?? 0;
    const height = props.height ?? '100%';
    const animate = props.animate ?? true;
    const loop = props.loop ?? false;

    if (!true) {
      if (paramName === 'Temperature') {
        if (level === 1) {
          const urlString = '../assets/icons/Temperature1.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else if (level === 2) {
          const urlString = '../assets/icons/Temperature2.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else {
          const urlString = '../assets/icons/Temperature3.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        }
      } else if (paramName === 'pH') {
        if (level === 1) {
          const urlString = '../assets/icons/pH1.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else if (level === 2) {
          const urlString = '../assets/icons/pH2.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else {
          const urlString = '../assets/icons/pH3.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        }
      } else if (paramName === 'Salinity') {
        if (level === 1) {
          const urlString = '../assets/icons/Salinity1.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else if (level === 2) {
          const urlString = '../assets/icons/Salinity2.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else {
          const urlString = '../assets/icons/Salinity3.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        }
      } else if (paramName === 'Ammonium') {
        if (level === 1) {
          const urlString = '../assets/icons/Ammonium1.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else if (level === 2) {
          const urlString = '../assets/icons/Ammonium2.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else {
          const urlString = '../assets/icons/Ammonium3.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        }
      } else if (paramName === 'Nitrate') {
        if (level === 1) {
          const urlString = '../assets/icons/Nitrate1.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else if (level === 2) {
          const urlString = '../assets/icons/Nitrate2.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else {
          const urlString = '../assets/icons/Nitrate3.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        }
      } else if (paramName === 'Chloride') {
        if (level === 1) {
          const urlString = '../assets/icons/Chloride1.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else if (level === 2) {
          const urlString = '../assets/icons/Chloride2.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        } else {
          const urlString = '../assets/icons/Chloride3.png';
          return (
            <View style={{height: height, width: 50}}>
              <Image
                source={require(urlString)}
                resizeMode="contain"
                height={'100%'}
                width={'100%'}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
          );
        }
      }
    }

    if (paramName === 'Temperature')
      return (
        <Temperature
          height={height}
          level={level}
          animate={animate}
          loop={loop}
        />
      );

    if (paramName === 'pH')
      return <PH height={height} level={level} animate={animate} loop={loop} />;
    if (paramName === 'Salinity')
      return (
        <Salinity height={height} level={level} animate={animate} loop={loop} />
      );
    if (paramName === 'Ammonium')
      return (
        <Ammonium height={height} level={level} animate={animate} loop={loop} />
      );
    if (paramName === 'Nitrate')
      return (
        <Nitrate height={height} level={level} animate={animate} loop={loop} />
      );
    if (paramName === 'Chloride')
      return (
        <Chloride height={height} level={level} animate={animate} loop={loop} />
      );
    return <Fragment></Fragment>;
  }
}
const calcAreaAverage = (area1, area2, area3) => {
  const AREAS = 3;
  const res = (area1 + area2 + area3) / AREAS;
  return Number(res.toFixed(2));
};
export default Parameter;
