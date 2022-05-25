import content from '../utils/content';
import ParameterObj from './ParameterObj';

const LOWVALUE = 20;
const HIGHVALUE = 25;
const UNIT = '°C';
const NAME = 'Temperature';
const SHORTNAME = 'TEMP';

class TemperatureObj extends ParameterObj {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE, SHORTNAME);
    this.name = NAME;
    this.unit = UNIT;
  }
}

export default TemperatureObj;
