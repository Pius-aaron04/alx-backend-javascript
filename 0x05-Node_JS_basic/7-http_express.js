const express = require('express');

const app = express();
const { argv } = require('process');
const fs = require('fs');

function countStudents(filePath) {
  let output = '';

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
        output += `Number of students: ${students.length}\n`;
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
          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }

        // Resolve promise
        resolve(output.trim());
      }
    });
  });
}

// root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// students data endpoint
app.get('/students', (req, res) => {
  countStudents(argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245, () => {
  console.log('Serving is listening on port 1245');
});

module.exports = app;
