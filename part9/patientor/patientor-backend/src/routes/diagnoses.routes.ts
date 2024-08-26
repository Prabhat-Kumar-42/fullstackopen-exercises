import express from "express";
import { handleGetAllDiagnoses } from "../controller/diagnoses.controller";

const diagnosesRouter = express.Router();

diagnosesRouter.route("/").get(handleGetAllDiagnoses);

export default diagnosesRouter;
