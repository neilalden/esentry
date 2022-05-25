import content from '../utils/content';
import ParameterObj from './ParameterObj';

const LOWVALUE = 40;
const HIGHVALUE = 80;
const UNIT = 'mg/l';
const NAME = 'Nitrate';
const SHORTNAME = 'NO3-';

class NitrateObj extends ParameterObj {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE, SHORTNAME);
    this.name = NAME;
    this.unit = UNIT;
  }
}

export default NitrateObj;
