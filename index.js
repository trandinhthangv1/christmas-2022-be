import express from 'express';
import cors from 'cors';
import Christmas from './schema/christmas.js';

import connectMongo from './mongodb.js';

connectMongo();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.post('/api/christmas-2022', async (req, res) => {
  try {
    await Christmas.create(req.body);
    res.json({ message: 'OK' });
  } catch (error) {
    res.status(500).json({ message: 'Error Server' });
  }
});

app.listen(3001, () => console.log('Starting...'));
