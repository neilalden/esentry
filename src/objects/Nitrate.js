import content from '../utils/content';
import Parameter from './Parameter';

const LOWVALUE = 0;
const HIGHVALUE = 80;
const SCALEINTERVAL = 8;
const UNIT = 'mg/l';
const NAME = 'Nitrate';
const SHORTNAME = 'NO3-';

class Nitrate extends Parameter {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE, SHORTNAME);
    this.scaleInterval = SCALEINTERVAL;
    this.name = NAME;
    this.unit = UNIT;
  }
}

export default Nitrate;
