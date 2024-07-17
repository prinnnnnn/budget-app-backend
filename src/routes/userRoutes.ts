import { Router } from "express";
import { createUser, getAllUsersInfo, getUserInfo } from "../controllers/userController";

const router = Router();

router.get("/", getAllUsersInfo);
router.get("/:name", getUserInfo);
router.post("/:name", createUser);

export default router;