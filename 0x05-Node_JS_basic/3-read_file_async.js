const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        // split lines
        const lines = data.split('\n');
        // filter out empty lines
        const students = lines.filter((line) => line.trim() !== '').splice(1);

        // log the total number of Students
        console.log(`Number of students: ${students.length}`);
        const fieldCounts = {};

        // Map fields to lists of student names
        students.forEach((record) => {
          const [name, , , field] = record.split(',');

          if (field) {
            if (!fieldCounts[field]) {
              fieldCounts[field] = [];
            }
            fieldCounts[field].push(name);
          }
        });

        // Log Fields stats
        for (const [field, names] of Object.entries(fieldCounts)) {
          console.log(`Numbers of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

        // Resolve promise
        resolve();
      }
    });
  });
}

module.exports = countStudents;
