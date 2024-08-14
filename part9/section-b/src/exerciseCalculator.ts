interface exerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const periodLength: number = 7;
const target: number = 2;

const xPercentOfY = (x: number, y: number): number => {
  return (x * y) / 100;
};

const xWhatPercentOfY = (x: number, y: number): number => {
  if (y === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return (x / y) * 100;
};

const calculateExercises = (exerciseHrs: number[]): exerciseResult => {
  let trainingDays: number = 0;
  const sum: number = exerciseHrs.reduce((prev, curr) => {
    if (curr) trainingDays++;
    return prev + curr;
  }, 0);
  const average: number = sum / periodLength;
  let success: boolean = false;
  let ratingDescription: string = "";
  let rating: number;

  if (average === target) {
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

try {
  const inputValues: number[] = [3, 0, 2, 4.5, 0, 3, 1];
  const result: exerciseResult = calculateExercises(inputValues);
  console.log(result);
} catch (err) {
  let errorMessage = "Error: ";
  if (err instanceof Error) errorMessage += err.message;
  console.log(errorMessage);
}
