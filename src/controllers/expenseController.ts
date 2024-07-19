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

/* GET - user/:userId */
export const getAllUserExpenses = async (req: Request, res: Response) => {

    console.log(`Retrieving all expenses by user...`);

    try {

        const userId = req.params.userId;
        const expenses = await Expense.find({ userId: userId });

        if (!expenses) return res.sendStatus(404);

        return res.status(200).send(expenses);
        
    } catch (error) {
        console.error(`Error retreving expenses by user...`);
        return res.sendStatus(400);
    }
    
}

/* GET - budget/:budgetId */
export const getExpensesByBudget = async (req: Request, res: Response) => {

    console.log(`Retreving all expenses by budget type...`);

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

    console.log(`Creating a new expense...`)

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

/* DELETE - /group/:budgetId */
export const deleteExpensesByBudget = async (req: Request, res: Response) => {
    
    console.log(`Deleting expenses by budget category...`);

    try {

        const budgetId = req.params.budgetId;

        await Expense.deleteMany({ budgetId: budgetId });

        return res.sendStatus(200);
        
    } catch (error) {
        console.error(`Error deleting expenses by budget category\n${error}`);
        return res.sendStatus(400);
    }

}

/* DELETE - /:expenseId */
export const deleteExpenseById = async (req: Request, res: Response) => {

    console.log(`Deleting an expense via its ID...`);

    try {
        
        const expenseId = req.params.expenseId;

        await Expense.findByIdAndDelete(expenseId);

        return res.sendStatus(200);

    } catch (error) {
        console.error(`Error deleting an expense by its ID\n${error}`);
        return res.sendStatus(400);
    }

}