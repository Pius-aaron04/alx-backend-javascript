const csv = require('csv-parser');
const fs = require('fs');

function countStudents(file) {
  const data = {};
  let noRows = 0;
  fs.createReadStream(file)
    .on('error', () => {
      throw Error('Cannot load the database');
    })
    .pipe(csv())
    .on('data', (row) => {
      if (row.field in data) {
        data[row.field].push(row.firstname);
      } else {
        data[row.field] = [row.firstname];
      }
      noRows += 1;
    })
    .on('end', () => {
      console.log(`Number of students: ${noRows}`);
      for (const field of Object.keys(data)) {
        console.log(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
      }
    });
}

module.exports = countStudents;
