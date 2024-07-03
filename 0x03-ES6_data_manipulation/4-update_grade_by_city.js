export default function updateStudentGradeByCity(list, city, newGrades) {
  const filteredList = list.filter((student) => student.location === city).map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return newGrade ? { ...student, grade: newGrade.grade } : { ...student, grade: NaN };
  });

  return filteredList;
}
