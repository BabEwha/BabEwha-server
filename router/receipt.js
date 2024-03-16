import express from 'express';
import 'express-async-errors';
import * as speakingController from '../controller/receipt.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', isAuth, receiptController.createReceipt);
router.patch('/', isAuth, receiptController.updateReceipt);
router.get('/:id', isAuth, receiptController.getReceipt);

export default router;
