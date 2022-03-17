import GalaxyCalculator from './../src/index.js';

describe('Galaxy Calculator', () => {

  test('should correctly generate your age on given planets', () => {
    const GalaxyCalculatorInstance = new GalaxyCalculator(20);
    expect(GalaxyCalculatorInstance.marsCalc()).toEqual("Your mars age is 10.638297872340425 and you have 67.36170212765957 years left to live"); 
  });
  test('should correctly generate your age on given planets', () => {
    const GalaxyCalculatorInstance = new GalaxyCalculator(20);
    expect(GalaxyCalculatorInstance.mercuryCalc()).toEqual("your mercury age is 83.33333333333334 You have lived 5.333333333333343 years past life expenctancy"); 
  });c
});