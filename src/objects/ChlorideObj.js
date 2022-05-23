import content from '../utils/content';
import ParameterObj from './ParameterObj';

const LOWVALUE = 23;
const HIGHVALUE = 80;
const UNIT = 'mg/l';
const NAME = 'Chloride';
const SHORTNAME = 'Cl-';

class ChlorideObj extends ParameterObj {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE);
    this.name = NAME;
    this.shortname = SHORTNAME;
    this.unit = UNIT;
  }

  getDescription(language) {
    const level = this.getLevel();
    if (level === 1) return content[`${language}`].chlLvl1;
    if (level === 2) return content[`${language}`].chlLvl2;
    if (level === 3) return content[`${language}`].chlLvl3;
  }
}

export default ChlorideObj;
