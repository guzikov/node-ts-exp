import { ITransaction } from "../types/Transaction";
import { model, Schema } from "mongoose";

const transactionSchema: Schema = new Schema({
  account: {
    type: String,
    required: true,
  },
  payee: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  node: {
    type: String,
  },
  inflow: {
    type: Number,
  },
  outflow: {
    type: Number,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

export default model<ITransaction>("Transaction", transactionSchema);
