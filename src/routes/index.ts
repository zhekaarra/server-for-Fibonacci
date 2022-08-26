import express, { Request, Response } from 'express';
import { getTicket } from '../controllers/post-controller';
import { getFibonacci } from '../controllers/get-controller';

const router = express.Router();

router.get('/health', getHealth);
router.get('/input', getTicket);
router.get('/output', getFibonacci);


function getHealth(req: Request, res: Response) {
  res.status(200).json({
    ok: true,
    message: 'Healthy',
  });
}

export default router;
