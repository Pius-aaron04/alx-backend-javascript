export default function getStudentsByLocation(list, location) {
  return list.filter((student) => student.location === location);
}
