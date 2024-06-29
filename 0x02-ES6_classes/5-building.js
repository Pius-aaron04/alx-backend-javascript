export default class Building {
  constructor(sqrt) {
    this._sqrt = sqrt;
    setTimeout(() => {
      if (super.evacuationWarningMessage && this.evacuationWarningMessage === super.prototype['evacuationWarningMessage']) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }, 0);
  }

  get sqrt() {
    return this_sqrt;
  }

  set sqrt(sqrt) {
    this._sqrt = sqrt;
  }

  evacuationWarningMessage() {
    console.log('evacuate');
  }
}
