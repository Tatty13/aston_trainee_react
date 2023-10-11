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
