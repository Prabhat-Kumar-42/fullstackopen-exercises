import { Request, Response } from "express";
import { getAllDiagnosesData } from "../services/diagnoses.services";

const handleGetAllDiagnoses = (_req: Request, res: Response) => {
  const data = getAllDiagnosesData();
  return res.status(200).json(data);
};

export { handleGetAllDiagnoses };
