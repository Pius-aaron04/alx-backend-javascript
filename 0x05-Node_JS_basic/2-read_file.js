const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    let lines = data.split('\n'); // split into lines

    // removes empty lines
    lines = lines.filter((line) => line.trim() !== '').splice(1);

    const students = lines.map((row) => row.split(','));
    console.log(`Number of students: ${students.length}`);

    const fieldsStudents = {};

    students.forEach((record) => {
      const [firstname, , , field] = record;

      if (field) {
        if (!fieldsStudents[field]) {
          fieldsStudents[field] = [];
        }
        fieldsStudents[field].push(firstname);
      }
    });

    // Logs fields and students names
    for (const [field, names] of Object.entries(fieldsStudents)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
