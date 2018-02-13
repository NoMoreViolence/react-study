import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import RandomNumber from './RandomNumber';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Header Initial state',
      content: 'Content Initial State'
    };
  }
  hello() {
    this.setState({
      header: 'Header Initial state',
      content: 'Content Initial State'
    });
  }
  updateHeader() {
    this.setState({
      header: 'Header has changed'
    });
  }

  render() {
    return (
      <div>
        <Header title={this.props.headerTitle} />
        <Content
          title={this.props.contentTitle}
          body={this.props.contentBody}
        />
        <Footer />
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>
        <button onClick={this.updateHeader.bind(this)}>Update</button>
        <button onClick={this.hello.bind(this)}>RollBack</button>
      </div>
    );
  }
}

App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
};

export default App;
