import { Router } from "express";
import { createBudget,
         deleteBudgetById,
         getAllBudgets,
         getBudgetById, 
         getBudgetsByUser } from "../controllers/budgetController";

const router = Router();

router.get("/", getAllBudgets);
router.get("/:userId", getBudgetsByUser);
router.get("/single/:budgetId", getBudgetById);
router.post("/:userId", createBudget);
router.delete("/:budgetId", deleteBudgetById);

export default router;