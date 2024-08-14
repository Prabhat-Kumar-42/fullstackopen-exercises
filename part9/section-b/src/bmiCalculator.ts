interface bmiInput {
  height: number;
  weight: number;
}

const throwError = (message: string): Error => {
  throw Error(message);
};

const parseInput = (args: string[]): bmiInput => {
  if (args.length != 4) throwError("invalid number of arguments");

  const height = Number(args[2]);
  const weight = Number(args[3]);

  if (isNaN(height) || isNaN(weight))
    throwError("invalid argument, both arguments must me a number");

  return {
    height,
    weight,
  };
};

const getResult = (result: number): string => {
  if (result < 18.5) return "underweight";
  if (result >= 18.5 && result <= 24.9) return "normal";
  if (result >= 25 && result <= 29.9) return "overweight";
  return "obese";
};

const calculateBmi = (inputValues: bmiInput): number => {
  return (
    (inputValues.weight / (inputValues.height * inputValues.height)) * 10000
  );
};

try {
  const inputValues: bmiInput = parseInput(process.argv);
  const bmi = calculateBmi(inputValues);
  console.log(`${getResult(bmi)} range`);
} catch (err) {
  let errorMessage = "Error: ";
  if (err instanceof Error) errorMessage += err.message;
  console.log(errorMessage);
}
