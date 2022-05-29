import content from '../utils/content';
import Parameter from './Parameter';

const LOWVALUE = 0;
const HIGHVALUE = 200;
const SCALEINTERVAL = 20;
const UNIT = 'mg/l';
const NAME = 'Ammonium';
const SHORTNAME = 'NH4+';

class Ammonium extends Parameter {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE, SHORTNAME);
    this.scaleInterval = SCALEINTERVAL;
    this.name = NAME;
    this.unit = UNIT;
  }
}

export default Ammonium;
