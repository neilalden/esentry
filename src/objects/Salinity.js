import content from '../utils/content';
import Parameter from './Parameter';

const LOWVALUE = 0;
const HIGHVALUE = 2;
const SCALEINTERVAL = 0.2;
const UNIT = 'ppt';
const NAME = 'Salinity';
const SHORTNAME = 'SAL';

class Salinity extends Parameter {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE, SHORTNAME);
    this.scaleInterval = SCALEINTERVAL;
    this.name = NAME;
    this.unit = UNIT;
  }
}

export default Salinity;
