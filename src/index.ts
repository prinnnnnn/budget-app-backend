import connectDB from "./config/database";
import express, { Request, Response } from "express";
import userRouter from "./routes/userRoutes"
import budgetRouter from "./routes/budgetRoutes"
import expenseRouter from './routes/expenseRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

const corsOptions: cors.CorsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", async (req: Request, res: Response) => {
    return res.send("Congratulation. This server is successfully run!!!")
});

app.use("/user", userRouter);
app.use("/budget", budgetRouter);
app.use("/expense", expenseRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/*

npm install cors
npm install -D @types/cors

*/