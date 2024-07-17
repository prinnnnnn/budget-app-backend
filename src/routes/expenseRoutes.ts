import { Router } from "express";
import { createExpense, getAllExpenses, getExpensesByBudget, getAllUserExpenses } from "../controllers/expenseController";

const router = Router();

router.get("/", getAllExpenses);
router.get("/user/:userId", getAllUserExpenses);
router.get("/budget/:budgetId", getExpensesByBudget);
router.post("/:budgetId", createExpense);

export default router;