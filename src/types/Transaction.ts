import { Document } from "mongoose";

export interface ITransaction extends Document {
  payee: string;
  category: string;
  note?: string;
  inflow: number;
  outflow: number;
  date: Date;
}
