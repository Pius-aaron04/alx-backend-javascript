export default function getStudentIdsSum(array) {
  if (typeof (array) !== 'object') return 0;

  return array.reduce((accumulator, currentObject) => accumulator + currentObject.id, 0);
}
