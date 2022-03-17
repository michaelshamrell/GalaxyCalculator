import $ from 'jquery';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
export default class GalaxyCalculator {
  constructor(age) {
    this.age = age;
    this.lifeExpenctancy = 78

  }

  mercuryCalc() {
      let mercuryAge = this.age / .24
      if (this.lifeExpenctancy < mercuryAge) {
        return `your mercury age is ${mercuryAge} You have lived ${mercuryAge - this.lifeExpenctancy} years past life expenctancy` 
      } else if (this.lifeExpenctancy >= mercuryAge) {
        return `Your mercury age is ${mercuryAge} and you have ${this.lifeExpenctancy - mercuryAge} years left to live`
      }
  }
  
  venusCalc() {
      let venusAge = this.age / .62
      if (this.lifeExpenctancy < venusAge) {
        return `your venus age is ${venusAge} You have lived ${venusAge - this.lifeExpenctancy} years past life expenctancy` 
      } else if (this.lifeExpenctancy >= venusAge) {
        return `Your venus age is ${venusAge} and you have ${this.lifeExpenctancy - venusAge} years left to live`
      }
  }
  
  marsCalc() {
      let marsAge = this.age / 1.88
      if (this.lifeExpenctancy < marsAge) {
        return `your mars age is ${marsAge} You have lived ${marsAge - this.lifeExpenctancy} years past life expenctancy` 
      } else if (this.lifeExpenctancy >= marsAge) {
        return `Your mars age is ${marsAge} and you have ${this.lifeExpenctancy - marsAge} years left to live`
      }
  }
  
  jupiterCalc() {
      let jupiterAge = this.age / 11.86
      if (this.lifeExpenctancy < jupiterAge) {
        return `your jupiter age is ${jupiterAge} You have lived ${jupiterAge - this.lifeExpenctancy} years past life expenctancy` 
      } else if (this.lifeExpenctancy >= jupiterAge) {
        return `Your jupiter age is ${jupiterAge} and you have ${this.lifeExpenctancy - jupiterAge} years left to live`
      }
  }
}


