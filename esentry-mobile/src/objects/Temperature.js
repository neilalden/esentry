import content from '../utils/content';
import Parameter from './Parameter';

const LOWVALUE = 0;
const HIGHVALUE = 30;
const SCALEINTERVAL = 3;
const UNIT = '°C';
const NAME = 'Temperature';
const SHORTNAME = 'TEMP';

class Temperature extends Parameter {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE, SHORTNAME);
    this.scaleInterval = SCALEINTERVAL;
    this.name = NAME;
    this.unit = UNIT;
  }
}

export default Temperature;
