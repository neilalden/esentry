import content from '../utils/content';
import ParameterObj from './ParameterObj';

const LOWVALUE = 20;
const HIGHVALUE = 200;
const UNIT = 'mg/l-N';
const NAME = 'Ammonium';
const SHORTNAME = 'NH4+';

class AmmoniumObj extends ParameterObj {
  constructor(area1, area2, area3, timeGathered = new Date()) {
    super(area1, area2, area3, timeGathered, LOWVALUE, HIGHVALUE);
    this.name = NAME;
    this.shortname = SHORTNAME;
    this.unit = UNIT;
  }

  getDescription(language) {
    const level = this.getLevel();
    if (level === 1) return content[`${language}`].ammLvl1;
    if (level === 2) return content[`${language}`].ammLvl2;
    if (level === 3) return content[`${language}`].ammLvl3;
  }
}

export default AmmoniumObj;
