import GalaxyCalculator from './../src/index.js';

describe('Galaxy Calculator', () => {

  test('should correctly generate your age on given planets', () => {
    const GalaxyCalculatorInstance = new GalaxyCalculator(20);
    expect(GalaxyCalculatorInstance.marsCalc()).toEqual("Your mars age is 10.638297872340425 and you have 67.36170212765957 years left to live"); 
    expect(GalaxyCalculatorInstance.mercuryCalc()).toEqual("your mercury age is 83.33333333333334 You have lived 5.333333333333343 years past life expenctancy"); 
    expect(GalaxyCalculatorInstance.venusCalc()).toEqual("Your venus age is 32.25806451612903 and you have 45.74193548387097 years left to live"); 
    expect(GalaxyCalculatorInstance.jupiterCalc()).toEqual("Your jupiter age is 1.6863406408094437 and you have 76.31365935919055 years left to live"); 
  });
});