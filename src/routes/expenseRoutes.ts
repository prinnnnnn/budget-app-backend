import { Router } from "express";
import { getAllExpenses, getExpensesByBudget } from "../controllers/expenseController";

const router = Router();

router.get("/", getAllExpenses);
router.get("/:budgetId", getExpensesByBudget)

export default router;