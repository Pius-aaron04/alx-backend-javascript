class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // returns location attribute when instance is cast to String
  toString() {
    return (this._location);
  }

  // return size attribute when instance is cast to Number
  valueOf() {
    return (this._size);
  }
}

export default HolbertonClass;
