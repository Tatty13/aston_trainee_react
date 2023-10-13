import { RefObject } from 'react';

export interface FormProps {
  btnText: string;
  placeholder: string;
  inputName: string;
  formName: string;
  onSubmit: (str: string) => void;
  innerInputRef?: RefObject<HTMLInputElement>;
}

export interface FormStates {
  value: string;
  isSubmitBtnDisabled: boolean;
}
