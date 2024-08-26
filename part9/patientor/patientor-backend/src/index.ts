import express, { Request, Response } from "express";
import diagnosesRouter from "./routes/diagnoses.routes";
import patientRouter from "./routes/patient.routes";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api/ping", (_req: Request, res: Response) => {
  return res.status(200).send("pong");
});

app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
