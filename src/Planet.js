export class Planet {
  constructor(yearLength) {
    this.yearLength = yearLength;
  }
  
  yearCalculator(age) {
    let solarYear = this.yearLength;
    if ((age > 0) && (solarYear > 0)) {
      let localAge = age / solarYear;
      return localAge;
    }
    else {
      let flagrantError = new RangeError('FLAGRANT SYSTEM ERROR Both numbers must be greater than zero')
      return flagrantError;
    }
  }
  yearsLeft() {
    return 'About ten seconds'
  }

}
