import content from '../utils/content';
import ParameterObj from './ParameterObj';

const LOWVALUE = 0;
const HIGHVALUE = 1;
const UNIT = 'ppt';
const NAME = 'Salinity';
const SHORTNAME = 'Sal';

class SalinityObj extends ParameterObj {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE);
    this.name = NAME;
    this.shortname = SHORTNAME;
    this.unit = UNIT;
  }

  getDescription(language) {
    const level = this.getLevel();
    if (level === 1) return content[`${language}`].salLvl1;
    if (level === 2) return content[`${language}`].salLvl2;
    if (level === 3) return content[`${language}`].salLvl3;
  }
}

export default SalinityObj;
