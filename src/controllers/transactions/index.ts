import { Request, Response } from "express";
import { ITransaction } from "../../types/Transaction";
import Transaction from "../../models/Transaction";

const getTransactions = async (req: Request, res: Response): Promise<void> => {
  try {
    const transactions: ITransaction[] = await Transaction.find();
    res.status(200).json({ transactions });
  } catch (e) {
    throw e;
  }
};
