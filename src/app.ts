import express from 'express';
import { PORT } from './config';
import { handleErrors } from './middlewares/error-handler';
import { logger } from './utils/logger';
import routes from './routes';

async function start() {
  try {
    const app = express();

    app
      .use(express.json({ limit: '10mb' }))
      .use(routes)
      .use(handleErrors);
    app.listen(PORT, function () {
      logger.log({ level: 'info', message: `fibo server started at http://localhost:${PORT}` });
    });
  } catch (error) {
    logger.error('The app has been crashed', { error });
  }
}

start();

