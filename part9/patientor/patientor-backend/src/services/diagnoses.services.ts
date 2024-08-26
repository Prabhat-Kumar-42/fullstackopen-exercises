import diagnosesData from "../data/diagnoses";
import Diagnoses from "../types/Diagnoses";

const getAllDiagnosesData = (): Array<Diagnoses> => {
  return diagnosesData;
};

export { getAllDiagnosesData };
