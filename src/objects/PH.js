import content from '../utils/content';
import Parameter from './Parameter';

const LOWVALUE = 0;
const HIGHVALUE = 10;
const SCALEINTERVAL = 1;
const UNIT = 'Units';
const NAME = 'pH';
const SHORTNAME = 'PH';

class PH extends Parameter {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE, SHORTNAME);
    this.scaleInterval = SCALEINTERVAL;
    this.name = NAME;
    this.unit = UNIT;
  }
}

export default PH;
