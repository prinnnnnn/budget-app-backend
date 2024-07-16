import { Router } from "express";
import { createBudget, getAllBudgets, getBudgetsByUser } from "../controllers/budgetController";

const router = Router();

router.get("/", getAllBudgets);
router.get("/:name", getBudgetsByUser);
router.post("/:name", createBudget);

export default router;