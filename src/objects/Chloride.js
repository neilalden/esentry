import content from '../utils/content';
import Parameter from './Parameter';

const LOWVALUE = 23;
const HIGHVALUE = 80;
const SCALEINTERVAL = 8;
const UNIT = 'mg/l';
const NAME = 'Chloride';
const SHORTNAME = 'Cl-';

class Chloride extends Parameter {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE, SHORTNAME);
    this.scaleInterval = SCALEINTERVAL;
    this.name = NAME;
    this.unit = UNIT;
  }
}

export default Chloride;
