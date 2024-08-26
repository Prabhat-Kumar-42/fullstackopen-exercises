import express from "express";
import { getAllPatient } from "../controller/patient.controller";

const patientRouter = express.Router();

patientRouter.route("/").get(getAllPatient);

export default patientRouter;
