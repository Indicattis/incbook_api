import express from 'express';
import cors from 'cors';
import { routes } from './routes';
export const app = express();
export const port = 3333;

app.use(express.json());
app.use(cors());
app.use(routes)

app.get('/', (req, res) => {
  return res.status(201).send("Servidor online!");
});