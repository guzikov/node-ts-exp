import {Router} from "express";
import {getTransactions, addTransaction, updateTransaction, deleteTransaction} from "../controllers/transactions";

const router: Router = Router();

router.get('/transactions', getTransactions);
router.post('/transactions', addTransaction);
router.put('/transactions/:id', updateTransaction);
router.delete('/transactions/:id', deleteTransaction);

export default router;