import { Router } from "express";
import { createBudget, getAllBudgets, getBudgetsByUser } from "../controllers/budgetController";

const router = Router();

router.get("/", getAllBudgets);
router.get("/:userId", getBudgetsByUser);
router.post("/:userId", createBudget);

export default router;