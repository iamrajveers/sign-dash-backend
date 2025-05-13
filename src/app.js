import express from 'express';
import routes from './routes/index.js'
import cors from 'cors';

const app = express();
const PORT = 4000;
app.use(cors());

app.use(express.json());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
