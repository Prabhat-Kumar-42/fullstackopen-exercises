import { Request, Response } from "express";
import { PatientPreview } from "../types/Patient";
import { getAllPatientData } from "../services/patient.services";

const getAllPatient = (_req: Request, res: Response) => {
  const patientData = getAllPatientData();
  const data: Array<PatientPreview> = patientData.map(
    ({ id, name, dateOfBirth, gender, occupation }): PatientPreview => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    }),
  );
  return res.status(200).json(data);
};

export { getAllPatient };
