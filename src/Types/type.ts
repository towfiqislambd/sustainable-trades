export type StepProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: Partial<FormData>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<FormData>>>;
};
export type AddressFormData = {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipcode: string;
};
