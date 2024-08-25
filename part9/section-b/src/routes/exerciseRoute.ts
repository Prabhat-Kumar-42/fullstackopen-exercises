import express from "express";
import handleExercises from "../controller/exerciseController";

const exerciseRouter = express.Router();

exerciseRouter.route("/").post(handleExercises);

export default exerciseRouter;
