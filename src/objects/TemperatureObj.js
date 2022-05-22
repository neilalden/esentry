import content from '../utils/content';
import ParameterObj from './ParameterObj';

const LOWVALUE = 20;
const HIGHVALUE = 25;
const UNIT = '°C';
const NAME = 'Temperature';
const SHORTNAME = 'Temp';

class TemperatureObj extends ParameterObj {
  constructor(area1, area2, area3) {
    super(area1, area2, area3, LOWVALUE, HIGHVALUE);
    this.name = NAME;
    this.shortname = SHORTNAME;
    this.unit = UNIT;
  }

  getDescription(language) {
    const level = this.getLevel();
    if (level === 1) return content[`${language}`].tempLvl1;
    if (level === 2) return content[`${language}`].tempLvl2;
    if (level === 3) return content[`${language}`].tempLvl3;
  }
}

export default TemperatureObj;
