import { Request, Response } from "express";
import Budget from "../models/budgetModel";
import User from "../models/userModel";

/* GET - / */
export const getAllBudgets = async (req: Request, res: Response) => {

    try {

        const budgets = await Budget.find({});

        if (!budgets) {
            return res.sendStatus(404);
        }

        return res.status(200).send(budgets);

    } catch (error) {
        console.error(`Error retrieving all budgets`, error);
        return res.sendStatus(400);
    }

}

/* GET - /:userId */
export const getBudgetsByUser = async (req: Request, res: Response) => {

    console.log(`Retreving all budgets of a user...`);

    try {

        const userId = req.params.userId;

        if (!userId) {
            return res.sendStatus(404);
        }

        const budgets = await Budget.find({ userId: userId });

        return res.status(200).send(budgets);

    } catch (error) {
        console.error(`Error retrieving all budgets`, error);
        return res.sendStatus(400);
    }

}

/* GET - /single/:budgetId */
export const getBudgetById = async (req: Request, res: Response) => {

    console.log(`Retrieving a budget by ID...`);

    try {

        const budgetId = req.params.budgetId;
        const budget = await Budget.findById(budgetId);

        if (!budget) return res.sendStatus(404);

        return res.status(200).send(budget.toJSON());
        
    } catch (error) {
        console.error('Error retrieving budget by ID');
        return res.sendStatus(400);
    }
    
}

/* POST - /:userId */
export const createBudget = async (req: Request, res: Response) => {

    console.log(`Creating new budget...`);

    try {

        const userId = req.params.userId;

        const user = await User.findById(userId);

        if (!user) {
            return res.sendStatus(404);
        }

        const numBudgets = user.budgetsCount;

        const newBudget = new Budget({
            userId: userId,
            createdAt: Date.now(),
            color: `${numBudgets * 34} 65% 50%`,
            ...req.body /* titles and amount of budget */
        });

        await newBudget.save();
        await User.findByIdAndUpdate(user._id, { budgetsCount: numBudgets + 1});

        return res.status(200).send(newBudget.toJSON());

    } catch (error) {
        console.error(`Error creating new budget\n${error}`);
        return res.sendStatus(400);
    }

}