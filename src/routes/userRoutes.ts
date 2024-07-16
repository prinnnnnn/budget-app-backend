import { Router } from "express";
import { getAllUsersInfo, getUserInfo } from "../controllers/userController";

const router = Router();

router.get("/", getAllUsersInfo);
router.get("/:name", getUserInfo);

export default router;