export interface ButtonProps {
  isBtnDisabled: boolean;
  btnText: string;
  btnType: 'button' | 'submit' | 'reset';
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}
