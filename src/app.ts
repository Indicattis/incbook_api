import express from 'express';
import cors from 'cors';
export const app = express();
export const port = 3333;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.status(201).send("Servidor online!");
});