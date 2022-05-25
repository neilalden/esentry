import content from '../utils/content';
import ParameterObj from './ParameterObj';

const LOWVALUE = 6;
const HIGHVALUE = 8;
const UNIT = 'Units';
const NAME = 'pH';
const SHORTNAME = 'PH';

class PHObj extends ParameterObj {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE, SHORTNAME);
    this.name = NAME;
    this.unit = UNIT;
  }
}

export default PHObj;
