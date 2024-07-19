import { Router } from "express";
import { createExpense,
         getAllExpenses,
         getExpensesByBudget,
         getAllUserExpenses,
         deleteExpensesByBudget,
         deleteExpenseById} from "../controllers/expenseController";

const router = Router();

router.get("/", getAllExpenses);
router.get("/user/:userId", getAllUserExpenses);
router.get("/budget/:budgetId", getExpensesByBudget);
router.post("/:budgetId", createExpense);
router.delete("/group/:budgetId", deleteExpensesByBudget);
router.delete("/:expenseId", deleteExpenseById);

export default router;