import { Document } from "mongoose";

export interface ITransaction extends Document {
  account: string;
  payee: string;
  category: string;
  note?: string;
  inflow: number;
  outflow: number;
  date: Date;
}
