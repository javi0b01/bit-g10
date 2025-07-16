import 'dotenv/config';
import connectDB from './config/db.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usersRouter from './routers/users.js';
import studentsRouter from './routers/students.js';
import uploadRouter from './routers/upload.js';

const server = express();
const host = process.env.HOST;
const port = process.env.PORT;

connectDB();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use('/users', usersRouter);
server.use('/students', studentsRouter);
server.use('/upload', uploadRouter);

server.get('/', (request, response) => {
  response.status(204).send();
});

server.listen(port, () => {
  console.log(`Server is running at ${host} on port ${port}`);
});
