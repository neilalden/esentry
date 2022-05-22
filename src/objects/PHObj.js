import content from '../utils/content';
import ParameterObj from './ParameterObj';

const LOWVALUE = 6;
const HIGHVALUE = 8;
const UNIT = 'Units';
const NAME = 'pH';
const SHORTNAME = 'pH';

class PHObj extends ParameterObj {
  constructor(area1, area2, area3) {
    super(area1, area2, area3, LOWVALUE, HIGHVALUE);
    this.name = NAME;
    this.shortname = SHORTNAME;
    this.unit = UNIT;
  }

  getDescription(language) {
    const level = this.getLevel();
    if (level === 1) return content[`${language}`].pHLvl1;
    if (level === 2) return content[`${language}`].pHLvl2;
    if (level === 3) return content[`${language}`].pHLvl3;
  }
}

export default PHObj;
