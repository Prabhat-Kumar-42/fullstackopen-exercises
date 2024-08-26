interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

type PatientPreview = Omit<Patient, "ssn">;

export default Patient;

export { PatientPreview };
