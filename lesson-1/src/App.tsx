import { Component, createRef } from 'react';

import { Button, Form, TitleList, Item } from './components';
import styles from './App.module.scss';
import { generateId } from './utils';

interface AppProps {}
interface AppStates {
  title: string;
  usedTitles: Item[];
}

class App extends Component<AppProps, AppStates> {
  inputRef;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      title: 'Title',
      usedTitles: [],
    };
    this.inputRef = createRef<HTMLInputElement>();
  }

  checkTitle = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const target = evt.target as HTMLButtonElement;
    console.log(target.closest('li'));
    console.log('CHECK!!!!');
  };

  deleteTitle = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const target = evt.target as HTMLButtonElement;
    console.log(target.closest('li'));
    console.log('DELETE!!!!');
  };

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
    const titles = localStorage.getItem('usedTitles');
    if (titles)
      this.setState({
        usedTitles: JSON.parse(titles),
      });
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

    localStorage.setItem('usedTitles', JSON.stringify(this.state.usedTitles));
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount App');
  }

  handleTitleChange = (text: string) => {
    const newListTitle = {
      text,
      id: generateId(),
    };

    this.setState((prevState) => ({
      title: text,
      usedTitles: prevState.usedTitles.concat([newListTitle]),
    }));
  };

  focusOnInput = () => {
    this.inputRef.current?.focus();
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
              innerInputRef={this.inputRef}
            />
            <Button
              btnType='button'
              btnText='Focus on input'
              isBtnDisabled={false}
              onClick={this.focusOnInput}
            />
          </section>
          <section className={styles.section}>
            <h2 className={styles.subtitle}>Used titles</h2>
            <TitleList
              titles={this.state.usedTitles}
              onCheck={this.checkTitle}
              onDelete={this.deleteTitle}
            />
          </section>
        </main>
      </>
    );
  }
}

export default App;
