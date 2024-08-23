const http = require('node:http');
const url = require('url');

const port = 1245;
const plainText = { 'Content-Type': 'text/plain' };
const fs = require('fs');
const { argv } = require('process');

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

const app = http.createServer((req, res) => {
  // parse request url
  const parseUrl = url.parse(req.url, true);
  if (parseUrl.pathname === '/') {
    res.writeHead(200, plainText);
    res.end('Hello Holberton School!');
  } else if (parseUrl.pathname === '/students') {
    res.writeHead(200, plainText);
    countStudents(argv[2]).then((data) => {
      res.end(`This is the list of our Students\n${data}`);
    })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    // Handle 404 Not Found
    res.writeHead(404, plainText);
    res.end('Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server is Listening on port: ${port}`);
});

module.exports = app;
