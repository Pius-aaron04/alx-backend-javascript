export default class Currency {
  constructor(code, name) {
	if (typof 
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  set code(code) {
    this._code = code;
  }

  displayFullCuirrency() {
    return `${this._name} (${this._code})`;
  }
}