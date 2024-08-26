import patientData from "../data/patient";
import { PatientPreview } from "../types/Patient";

const getAllPatientData = (): Array<PatientPreview> => {
  return patientData;
};

export { getAllPatientData };
