import { Request, Response } from "express";
import throwClientError from "../utils/throwError";
import bmi, { bmiInput } from "../bmiCalculator";

interface BmiResponseBody {
  weight: number;
  height: number;
  bmi: string;
}

const handleGetBmi = (req: Request, res: Response) => {
  const weight = parseFloat(req.query.weight as string);
  const height = parseFloat(req.query.height as string);

  if (isNaN(weight) || isNaN(height))
    throwClientError(400, "malformed paramaters");

  const input: bmiInput = {
    weight,
    height,
  };

  const bmiResult: string = bmi(input);
  const bmiResponseBody: BmiResponseBody = {
    weight,
    height,
    bmi: bmiResult,
  };

  res.status(200).json(bmiResponseBody);
};

export default handleGetBmi;
