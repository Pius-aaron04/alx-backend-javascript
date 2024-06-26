export default function createIteratorObject(report) {
  const { allEmployees } = report;

  let iteratorObject = [];

  for (const object in allEmployees) {
    if (allEmployees[object]) iteratorObject = [...iteratorObject, ...allEmployees[object]];
  }

  return iteratorObject;
}
