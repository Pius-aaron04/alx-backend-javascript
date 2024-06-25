export default function appendToEachArrayValue(array, appendString) {
  let array1 = [];
  for (const value of array) {
    array1 = [...array1, ...[appendString + value]];
  }
  return array1;
}
