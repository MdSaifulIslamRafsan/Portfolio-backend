import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/ globalError";
import cookieParser from 'cookie-parser';
const app: Application = express();

// Middleware to handle CORS requests
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

app.use(cookieParser());
app.use('/api', router )

app.use(globalErrorHandler)

// Route to handle GET requests at /api/users
app.get("/", (req: Request, res: Response) => {
  res.send("portfolio server running!");
});

export default app;
