import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


app.use(cors());
app.use(express.json());  
app.use(bodyParser.urlencoded({ extended: true }));  


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/api', routes);

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
