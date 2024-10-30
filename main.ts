import express, { Application, Request, Response } from "express";
import crypto from "crypto";
import dotenv, { config } from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const value = crypto.randomBytes(3).toString("hex");
// console.log(process.env.PORT);
interface iProps {
  id: string;
  name: string;
  grade: string;
  score: number;
}

const app: Application = express();

app.use(express.json());

let database: Array<iProps> = [];
app.get("/", (req: Request, res: Response): any => {
  return res.status(200).json({
    message: "Welcome to my API",
  });
});
app.get("/api/students", (req: Request, res: Response): any => {
  return res.status(200).json({
    message: "Welcome to my API",
    data: database,
  });
});

app.post("/api/create-student", (req: Request, res: Response) => {
  const { name, score } = req.body;

  let y = {
    id: value,
    name,
    score,
    grade:
      score >= 0 && score <= 50
        ? "F"
        : score >= 51 && score <= 60
        ? "C"
        : score >= 61 && score <= 70
        ? "B"
        : score >= 71 && score <= 100
        ? "A"
        : null,
  };
  let data = [...database, y];

  res.status(200).json({
    message: "Create student API",
    data: y,
    value: data,
  });
});

app.listen(parseInt(process.env.PORT as string), () => {
  console.clear();

  console.log(`Server is running on port ${process.env.PORT}`);
});
