import content from '../utils/content';
import ParameterObj from './ParameterObj';

const LOWVALUE = 20;
const HIGHVALUE = 200;
const UNIT = 'mg/l';
const NAME = 'Ammonium';
const SHORTNAME = 'NH4+';

class AmmoniumObj extends ParameterObj {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE, SHORTNAME);
    this.name = NAME;
    this.unit = UNIT;
  }
}

export default AmmoniumObj;
