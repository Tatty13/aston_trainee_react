export interface ButtonProps {
  btnType: 'button' | 'submit' | 'reset';
  btnText?: string;
  isBtnDisabled?: boolean;
  variant?: 'check' | 'delete' | 'text';
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}
