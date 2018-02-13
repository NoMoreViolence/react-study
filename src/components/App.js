import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: Math.round(Math.random() * 100)
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(randomValue) {
    this.setState({
      value: randomValue
    });
  }

  render() {
    // this.state.value 숫자, this.uadateValue 업데이트 된 숫자, 이 숫자를 setState를 통해서 number에게 넘겨주면 값은 변경된다
    return (
      <div>
        <Header title={this.props.headerTitle} />
        <Content
          title={this.props.contentTitle}
          body={this.props.contentBody}
        />
        <RandomNumber number={this.state.value} onUpdate={this.updateValue} />
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
