import express, { Express, Request, Response, Application } from 'express';
import todoRoute from './routes/todo';
import connectDB from './db/connect';
import config from './config';

const { mongoURI, port } = config;

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.use('/api/v1/todo', todoRoute);

const startServer = async () => {
  try {
    await connectDB(mongoURI);
    app.listen(port, () => {
      console.log(`Sever is listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1); // Exit process with failure
  }
};

startServer();
