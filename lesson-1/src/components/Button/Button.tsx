import { Component } from 'react';

import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        className={styles.button}
        type={this.props.btnType}
        disabled={this.props.isBtnDisabled}
        onClick={this.props.onClick}>
        {this.props.btnText}
      </button>
    );
  }
}
