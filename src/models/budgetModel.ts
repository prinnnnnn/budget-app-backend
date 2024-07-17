import { Document, Schema, model } from "mongoose";

/*

{
  "_id": ObjectId("60d5ec49d2f1b2a5c88b2b2f"),
  "userId": ObjectId("60d5ec49d2f1b2a5c88b2b2e"),
  "title": "Monthly Budget - June",
  "amount": 2000,
  "startDate": "2023-06-01T00:00:00.000Z",
  "endDate": "2023-06-30T23:59:59.999Z",
  "createdAt": "2023-06-01T12:00:00.000Z",
  "updatedAt": "2023-06-01T12:00:00.000Z"
}

*/

interface Budget extends Document {
    userId: string,
    title: string,
    amount: number,
    createdAt: string,
    color: string
}

const BudgetSchema: Schema = new Schema({
    "userId": { type: String, required: true },
    "title": { type: String, required: true },
    "amount": { type: Number, required: true},
    "createdAt": { type: Number, required: true },
    "color": { type: String, required: true}
})

const BudgetModel = model<Budget>("Budgets", BudgetSchema);

export default BudgetModel;