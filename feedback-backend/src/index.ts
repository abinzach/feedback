import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

let feedbackEntries: { name: string; feedback: string }[] = [];

// GET /feedback endpoint with pagination
app.get('/feedback', (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedFeedbacks = feedbackEntries.slice(startIndex, endIndex);
  res.json(paginatedFeedbacks);
});

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello' });
});

// POST /feedback endpoint with rate limiting
app.post(
  '/feedback',
  rateLimit({
    windowMs: 10 * 1000, // 10 seconds
    max: 1, // Limit each IP to 1 request per windowMs
  }),
  (req: Request, res: Response) => {
    const { name, feedback } = req.body;
    feedbackEntries.push({ name, feedback });
    res.status(201).send('Feedback submitted');
    console.log(feedbackEntries);
  }
);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
