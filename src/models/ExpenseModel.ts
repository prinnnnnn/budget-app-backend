import { Document, Schema, model } from "mongoose";

/*

{
  "_id": ObjectId("60d5ec49d2f1b2a5c88b2b30"),
  "userId": ObjectId("60d5ec49d2f1b2a5c88b2b2e"),
  "budgetId": ObjectId("60d5ec49d2f1b2a5c88b2b2f"),
  "description": "Groceries",
  "amount": 150,
  "date": "2023-06-02T12:00:00.000Z",
  "category": "Food",
  "createdAt": "2023-06-02T12:00:00.000Z",
  "updatedAt": "2023-06-02T12:00:00.000Z"
}

*/

interface Expense extends Document {
    userId: string,
    budgetId: string,
    // category: string,
    title: string,
    amount: number,
    createdAt: number
}

const ExpenseSchema: Schema = new Schema({
    "userId": { type: String, required: true },
    "budgetId": { type: String, required: true },
    // "category": { type: String, required: true },
    "title": { type: String, required: true },
    "amount": { type: Number, required: true},
    "createdAt": { type: Number, required: true }
});

const ExpenseModel = model<Expense>("Expenses", ExpenseSchema);

export default ExpenseModel;