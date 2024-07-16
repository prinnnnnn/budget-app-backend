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

/* GET - /:name */
export const getBudgetsByUser = async (req: Request, res: Response) => {

    console.log(`Retreving all budgets...`);

    try {

        const username = req.params.name;
        const user = await User.findOne({ name: username });

        if (!user) {
            return res.sendStatus(404);
        }

        const userId = user._id;

        const budgets = await Budget.find({ userId: userId });

        return res.status(200).send(budgets);

    } catch (error) {
        console.error(`Error retrieving all budgets`, error);
        return res.sendStatus(400);
    }

}

/* POST - /:name */
export const createBudget = async (req: Request, res: Response) => {

    console.log(`Creating new budget...`);

    try {

        const username = req.params.name;

        const user = await User.findOne({ name: username });

        if (!user) {
            return res.sendStatus(404);
        }

        const userId = user._id

        const newBudget = new Budget({
            userId: userId,
            ...req.body
        });

        await newBudget.save();

        return res.status(200).send(newBudget.toJSON());

    } catch (error) {
        console.error(`Error creating new budget`);
        return res.sendStatus(400);
    }

}