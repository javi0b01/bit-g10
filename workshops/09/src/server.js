import 'dotenv/config';
import connectDB from './config/db.js';
import express from 'express';
import morgan from 'morgan';
import studentsRouter from './routers/students.js';

const server = express();
const host = process.env.HOST;
const port = process.env.PORT;

connectDB();

server.use(express.json());
server.use(morgan('dev'));
server.use('/students', studentsRouter);

server.get('/', (request, response) => {
  response.status(204).send();
});

server.listen(port, () => {
  console.log(`Server is running at ${host} on port ${port}`);
});
