import { Component } from 'react';
import { Form } from './components';
import styles from './App.module.scss';

interface AppProps {}
interface AppStates {
  title: string;
}

class App extends Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      title: 'Title',
    };
  }

  static getDerivedStateFromProps(
    props: Readonly<AppProps>,
    state: Readonly<AppStates>
  ): object | null {
    console.log('');
    console.log('getDerivedStateFromProps App', { props, state });
    return state;
  }

  componentDidMount(): void {
    console.log('componentDidMount App');
  }

  shouldComponentUpdate(
    nextProps: Readonly<AppProps>,
    nextState: Readonly<AppStates>,
    nextContext: any
  ): boolean {
    console.log('shouldComponentUpdate App', {
      nextProps,
      nextState,
      nextContext,
    });
    return true;
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<AppProps>,
    prevState: Readonly<AppStates>
  ): any {
    console.log('getSnapshotBeforeUpdate App', { prevProps, prevState });
    return prevState;
  }

  componentDidUpdate(
    prevProps: Readonly<AppProps>,
    prevState: Readonly<AppStates>,
    snapshot?: any
  ): void {
    console.log('componentDidUpdate App', { prevProps, prevState, snapshot });
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount App');
  }

  handleTitleChange = (text: string) => {
    this.setState({
      title: text,
    });
  };

  render() {
    return (
      <>
        <main className={styles.main}>
          <section className={styles.section}>
            <h1 className={styles.title}>{this.state.title}</h1>
            <Form
              btnText='Change title'
              placeholder='Enter text'
              inputName='text'
              formName='title-change'
              onSubmit={this.handleTitleChange}
            />
          </section>
        </main>
      </>
    );
  }
}

export default App;
