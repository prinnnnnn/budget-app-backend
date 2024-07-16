import connectDB from "./config/database";
import express, { Request, Response } from "express";
import userRouter from "./routes/userRoutes"
import budgetRouter from "./routes/budgetRoutes"
import expenseRouter from './routes/expenseRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    return res.send("Congratulation. This server is successfully run!!!")
});

app.use("/user", userRouter);
app.use("/budget", budgetRouter);
app.use("/expense", expenseRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});