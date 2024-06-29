import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classrooms = [];
  for (const num of [19, 20, 34]) classrooms.push(new ClassRoom(num));
  return classrooms;
}
