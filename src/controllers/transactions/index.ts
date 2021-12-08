import { Request, Response } from "express";
import { ITransaction } from "../../types/Transaction";
import Transaction from "../../models/Transaction";

const getTransactions = async (_: Request, res: Response): Promise<void> => {
  try {
    const transactions: ITransaction[] = await Transaction.find();
    res.status(200).json({ transactions });
  } catch (e) {
    throw e;
  }
};

const addTransaction = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Readonly<ITransaction>; //utility type

    const transaction: ITransaction = new Transaction({
      payee: body.payee,
      category: body.category,
      note: body.note,
      inflow: body.inflow,
      outflow: body.outflow,
      date: new Date(body.date),
    });

    const newTransaction: ITransaction = await transaction.save();
    const alltransactions: ITransaction[] = await Transaction.find();

    res
      .status(201)
      .json({message: 'Transaction added', transaction: newTransaction, transactions: alltransactions})
  } catch (error) {
    throw error;
  }
}