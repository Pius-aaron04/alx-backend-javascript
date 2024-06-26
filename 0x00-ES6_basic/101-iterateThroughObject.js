export default function iterateThroughObject(reportWithIterator) {
  let string = '';

  for (const object of reportWithIterator) {
    if (object !== reportWithIterator[reportWithIterator.length - 1]) {
      string += `${object} | `;
    } else {
      string += object;
    }
  }
  return string;
}
