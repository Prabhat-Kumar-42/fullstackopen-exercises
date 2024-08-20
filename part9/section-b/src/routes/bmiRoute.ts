import express from "express";
import handleGetBmi from "../controller/bmiController";

const bmiRouter = express.Router();

bmiRouter.route("/").get(handleGetBmi);

export default bmiRouter;
