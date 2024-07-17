import { Router } from "express";
import { createExpense, getAllExpenses, getExpensesByBudget } from "../controllers/expenseController";

const router = Router();

router.get("/", getAllExpenses);
router.get("/:budgetId", getExpensesByBudget);
router.post("/:budgetId", createExpense);

export default router;