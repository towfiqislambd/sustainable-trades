export type StepProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: Partial<FormData>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<FormData>>>;
};
