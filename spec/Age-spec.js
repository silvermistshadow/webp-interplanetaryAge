import { Planet } from '../src/Planet';

describe('Planet', function() {
  let testPlanet = new Planet(1.88);

  it('should store a Planet object', function(){
    expect(testPlanet.yearLength).toEqual(1.88);
  })
  
})