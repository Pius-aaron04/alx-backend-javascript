export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,
    getNumberOfDepartments: (list) => Object.keys(list).length,
  };
  return reportObject;
}
