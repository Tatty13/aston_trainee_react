export interface FormProps {
  btnText: string;
  placeholder: string;
  inputName: string;
  formName: string;
  onSubmit: (str: string) => void;
}

export interface FormStates {
  value: string;
}
