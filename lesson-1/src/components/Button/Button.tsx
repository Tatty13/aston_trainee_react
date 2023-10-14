import { Component } from 'react';

import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

export class Button extends Component<ButtonProps> {
  render() {
    const {
      variant = 'text',
      btnType,
      isBtnDisabled = false,
      btnText,
      onClick,
    } = this.props;
    return (
      <button
        className={[styles.button, styles[`button__variant_${variant}`]].join(
          ' '
        )}
        type={btnType}
        disabled={isBtnDisabled}
        onClick={onClick}>
        {btnText}
      </button>
    );
  }
}
