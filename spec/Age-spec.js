import { Planet } from '../src/Planet';

describe('Planet', function() {
  let mercury = new Planet(0.24);
  let venus = new Planet(0.62);
  let mars = new Planet(1.88);
  let jupiter = new Planet(11.86);
  let testAge = 26;

  it('should store a Planet object', function(){
    expect(mars.yearLength).toEqual(1.88);
  })
  it('should calculate the input age in a planets years', function() {
    expect(mercury.yearCalculator(testAge)).toEqual(108.33333333333334);
    expect(venus.yearCalculator(testAge)).toEqual(41.935483870967744);
    expect(mars.yearCalculator(testAge)).toEqual(13.829787234042554);
    expect(jupiter.yearCalculator(testAge)).toEqual(2.1922428330522767)
  })

  it('should determine how long a user has to live on each planet', function() {
    expect(mercury.yearsLeft()).toEqual('About ten seconds');
    expect(venus.yearsLeft()).toEqual('About ten seconds');
    expect(mars.yearsLeft()).toEqual('About ten seconds');
    expect(jupiter.yearsLeft()).toEqual('About ten seconds');
  })

})