import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw Error('TypeError: Amount must be a number');
    } else if (!(currency instanceof Currency)) {
      throw Error('TypeError: currency must be Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get curreny() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof (amount) !== 'number') {
      throw Error('TypeError: Amount must be a number');
    }
    this._amount = amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw Error('TypeError: currency must be Currency type');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
