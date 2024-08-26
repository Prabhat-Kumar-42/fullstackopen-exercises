import { Request, Response } from "express";
import calculateExercises, {
  exerciseInput,
  parseExerciseInput,
} from "../exerciseCalculator";
import throwClientError from "../utils/throwError";

const handleExercises = (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises: dailyExercises, target } = req.body;
  if (!Array.isArray(dailyExercises) || !target)
    throwClientError(400, "parameters missing");

  const input: exerciseInput = parseExerciseInput([
    "dummy",
    "dummy",
    target,
    ...dailyExercises,
  ]);
  const result = calculateExercises(input);
  return res.status(200).json(result);
};

export default handleExercises;