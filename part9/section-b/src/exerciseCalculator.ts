interface exerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export interface exerciseInput {
  target: number;
  exerciseHrs: number[];
}

const xPercentOfY = (x: number, y: number): number => {
  return (x * y) / 100;
};

const xWhatPercentOfY = (x: number, y: number): number => {
  if (y === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return (x / y) * 100;
};

export const parseExerciseInput = (args: string[]): exerciseInput => {
  const target: number = Number(args[2]);
  if (isNaN(target)) throw new Error("invalid input");
  const exerciseHrs: number[] = args.slice(3).map((num) => {
    const returnValue = Number(num);
    if (isNaN(returnValue)) throw new Error("invalid input");
    return returnValue;
  });
  const result: exerciseInput = { target, exerciseHrs };
  return result;
};

const calculateExercises = (input: exerciseInput): exerciseResult => {
  const target = input.target;
  const exerciseHrs = input.exerciseHrs;
  const periodLength = exerciseHrs.length;
  let trainingDays = 0;
  const sum = exerciseHrs.reduce((prev, curr) => {
    if (curr) trainingDays++;
    return prev + curr;
  }, 0);
  const average = sum / periodLength;
  let success = false;
  let ratingDescription = "";
  let rating: number;

  if (average >= target) {
    rating = 3;
    success = true;
    ratingDescription = "perfect";
  } else if (average > xPercentOfY(90, target)) {
    rating = xPercentOfY(90, 3);
    ratingDescription = "excellent";
  } else if (average > xPercentOfY(70, target)) {
    rating = xPercentOfY(70, 3);
    ratingDescription = "good";
  } else if (average > xPercentOfY(60, target)) {
    rating = xPercentOfY(60, 3);
    ratingDescription = "could be better";
  } else {
    rating = xPercentOfY(xWhatPercentOfY(average, target), 3);
    ratingDescription = "try harder";
  }

  const result: exerciseResult = {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };

  return result;
};

if (require.main === module) {
  try {
    const inputValues: exerciseInput = parseExerciseInput(process.argv);
    const result: exerciseResult = calculateExercises(inputValues);
    console.log(result);
  } catch (err) {
    let errorMessage = "Error: ";
    if (err instanceof Error) errorMessage += err.message;
    console.log(errorMessage);
  }
}
export default calculateExercises;
