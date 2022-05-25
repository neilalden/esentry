import React, {Fragment} from 'react';
import content from '../utils/content';
import AmmoniumIco from '../icons/AmmoniumIco';
import ChlorideIco from '../icons/ChlorideIco';
import NitrateIco from '../icons/NitrateIco';
import PHIco from '../icons/PHIco';
import SalinityIco from '../icons/SalinityIco';
import TemperatureIco from '../icons/TemperatureIco';
class ParameterObj {
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
    if (paramName === 'Temperature')
      return (
        <TemperatureIco
          height={height}
          level={level}
          animate={animate}
          loop={loop}
        />
      );
    if (paramName === 'pH')
      return (
        <PHIco height={height} level={level} animate={animate} loop={loop} />
      );
    if (paramName === 'Salinity')
      return (
        <SalinityIco
          height={height}
          level={level}
          animate={animate}
          loop={loop}
        />
      );
    if (paramName === 'Ammonium')
      return (
        <AmmoniumIco
          height={height}
          level={level}
          animate={animate}
          loop={loop}
        />
      );
    if (paramName === 'Nitrate')
      return (
        <NitrateIco
          height={height}
          level={level}
          animate={animate}
          loop={loop}
        />
      );
    if (paramName === 'Chloride')
      return (
        <ChlorideIco
          height={height}
          level={level}
          animate={animate}
          loop={loop}
        />
      );
    return <Fragment></Fragment>;
  }
}
const calcAreaAverage = (area1, area2, area3) => {
  const AREAS = 3;
  const res = (area1 + area2 + area3) / AREAS;
  return Number(res.toFixed(2));
};
export default ParameterObj;
