import express from 'express';
import morgan from 'morgan';

const server = express();
const port = 4100;

const students = [];

server.use(express.json());
server.use(morgan('dev'));

// root
server.get('/', (request, response) => {
  response.json({ message: 'root works!' });
});

// routes
// create
server.post('/students', (req, res) => {
  const newStudent = {
    id: students.length,
    name: req.body.name,
  };
  students.push(newStudent);
  res.status(201).json({ message: 'POST students', data: newStudent });
});

// read all
server.get('/students', (req, res) => {
  res.status(200).json({ message: 'GET students', data: students });
});

// read
server.get('/students/:id', (req, res) => {
  const studentId = req.params.id;
  if (students[studentId]) {
    res.status(200).json({ message: 'GET student', data: students[studentId] });
  } else {
    res
      .status(404)
      .json({ message: 'GET student - Student not found', data: null });
  }
});

// update
server.put('/students/:id', (req, res) => {
  const studentId = req.params.id;
  if (students[studentId]) {
    students[studentId].name = req.body.name;
    res.status(200).json({ message: 'PUT student', data: students[studentId] });
  } else {
    res
      .status(404)
      .json({ message: 'PUT student - Student not found', data: null });
  }
});

// delete
server.delete('/students/:id', (req, res) => {
  const studentId = req.params.id;
  if (students[studentId]) {
    const deletedStudent = students.splice(studentId, 1);
    res
      .status(200)
      .json({ message: 'DELETE student', data: deletedStudent[0] });
  } else {
    res
      .status(404)
      .json({ message: 'DELETE student - Student not found', data: null });
  }
});

// start server
server.listen(port, () => {
  console.log(`Server is running on http://localhost at port: ${port}`);
});
