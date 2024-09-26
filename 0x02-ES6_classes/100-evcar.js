import Car from './10-car';

// 100-evcar.js

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    return new Car();
  }
}
