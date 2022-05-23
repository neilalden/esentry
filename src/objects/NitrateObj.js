import content from '../utils/content';
import ParameterObj from './ParameterObj';

const LOWVALUE = 40;
const HIGHVALUE = 80;
const UNIT = 'mg/l-N';
const NAME = 'Nitrate';
const SHORTNAME = 'NO3-';

class NitrateObj extends ParameterObj {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE);
    this.name = NAME;
    this.shortname = SHORTNAME;
    this.unit = UNIT;
  }

  getDescription(language) {
    const level = this.getLevel();
    if (level === 1) return content[`${language}`].nitLvl1;
    if (level === 2) return content[`${language}`].nitLvl2;
    if (level === 3) return content[`${language}`].nitLvl3;
  }
}

export default NitrateObj;
