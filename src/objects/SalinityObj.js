import content from '../utils/content';
import ParameterObj from './ParameterObj';

const LOWVALUE = 0;
const HIGHVALUE = 1;
const UNIT = 'ppt';
const NAME = 'Salinity';
const SHORTNAME = 'SAL';

class SalinityObj extends ParameterObj {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE, SHORTNAME);
    this.name = NAME;
    this.unit = UNIT;
  }
}

export default SalinityObj;
