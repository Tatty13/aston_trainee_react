import { Component, ReactNode } from 'react';
import { FormProps, FormStates } from './Form.types';
import styles from './Form.module.scss';

export class Form extends Component<FormProps, FormStates> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      value: '',
      isSubmitBtnDisabled: false,
    };
  }

  getSubmitBtnState = (inputValue: string) => {
    return inputValue.toLowerCase().includes('реакт');
  };

  handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value;

    this.setState({
      value: newValue,
      isSubmitBtnDisabled: this.getSubmitBtnState(newValue),
    });
  };

  handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render(): ReactNode {
    return (
      <form
        name={this.props.formName}
        className={styles.form}
        onSubmit={this.handleSubmit}>
        <input
          type='text'
          name={this.props.inputName}
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.handleInputChange}
        />
        <button
          type='submit'
          disabled={this.state.isSubmitBtnDisabled}>
          {this.props.btnText}
        </button>
      </form>
    );
  }
}
