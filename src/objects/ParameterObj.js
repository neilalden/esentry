class ParameterObj {
  constructor(area1, area2, area3, timeGathered, lowValue, highValue) {
    this.average = calcAreaAverage(area1, area2, area3);
    this.area1 = area1;
    this.area2 = area2;
    this.area3 = area3;
    this.lowValue = lowValue;
    this.highValue = highValue;
  }
  getLevel() {
    if (this.average < this.lowValue) return 1;
    if (this.average >= this.lowValue && this.average <= this.highValue)
      return 2;
    if (this.average > this.highValue) return 3;
  }
}
const calcAreaAverage = (area1, area2, area3) => {
  const AREAS = 3;
  const res = (area1 + area2 + area3) / AREAS;
  return Number(res.toFixed(2));
};
export default ParameterObj;
