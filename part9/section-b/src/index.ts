import express from "express";
import "express-async-errors";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import bmiRouter from "./routes/bmiRoute";

const app = express();
app.use(express.json());

app.use("/bmi", bmiRouter);

app.use(ErrorHandler);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
