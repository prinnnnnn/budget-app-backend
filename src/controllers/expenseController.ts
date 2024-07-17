import { Request, Response } from "express";
import Expense from "../models/ExpenseModel";

/* GET - / */
export const getAllExpenses = async (req: Request, res: Response) => {

    console.log(`Retrieving every expenses...`);
    
    try {

        const expenses = await Expense.find({});

        if (!expenses) {
            return res.status(404).send(expenses);
        }

        return res.status(200).send(expenses);
        
    } catch (error) {
        console.error(`Error retrieving all expenses`, error);
        return res.sendStatus(400);
    }

}

/* GET - /:budgetId */
export const getExpensesByBudget = async (req: Request, res: Response) => {

    console.log(`Retreving all expenses...`);

    try {
        
        const id = req.params.budgetId;
        const expenses = await Expense.find({ budgetId: id });

        if (!expenses) {
            return res.sendStatus(400);
        }

        return res.status(200).send(expenses);

    } catch (error) {
        console.error(`Error retrieving expenses by budget ID`);
        return res.sendStatus(400);
    }
    
}

/* POST - /:budgetId */
export const createExpense = async (req: Request, res: Response) => {

    try {

        const budgetId = req.params.budgetId;

        const newExpense = new Expense({
            budgetId: budgetId,
            createdAt: Date.now(),
            ...req.body // title, amount
        });

        await newExpense.save();

        return res.status(200).send(newExpense.toJSON());
        
    } catch (error) {
        console.error(`Error creating expense\n${error}`);
        return res.sendStatus(400);
    }

}