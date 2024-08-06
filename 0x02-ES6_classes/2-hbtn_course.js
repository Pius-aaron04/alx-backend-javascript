export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw Error('TypeError: Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof (length) !== 'number') {
      throw Error('TypeError: Length must be number');
    } else {
      this._length = length;
    }
    if (typeof (students) !== 'object') {
      throw Error('TypeError: Students must be an array');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw Error('TypeError: Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof (length) !== 'number') {
      throw Error('TypeError: Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (typeof (students) !== 'object') {
      throw Error('TypeError: Students must be an array');
    }
    this._students = students;
  }
}
