import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor 생성됨');

    this.state = {
      hello: '난 state'
    };

    this.Change = this.Change.bind(this);
  }

  Change() {
    this.setState({
      hello: 'changed'
    });
  }

  componentWillMount() {
    console.log(
      'componentWillMount 컴포넌트 마운트 되기 전 === 컴포넌트 생성 과정'
    );
  }

  componentDidMount() {
    console.log(
      'componentDidMount 컴포넌트 마운트 된 후 === 컴포넌트 생성 완료'
    );
  }

  // 컴포넌트가 새로운 props를 받았을 때
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps: ' + JSON.stringify(nextProps));
  }

  // 컴포넌트를 표시할지 안할지 결정하는 부분
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      'shouldComponentUpdate: ' +
        JSON.stringify(nextProps) +
        ' ' +
        JSON.stringify(nextState)
    );
    return true;
  }

  // 컴포넌트 업데이트 되기 전
  componentWillUpdate(nextProps, nextState) {
    console.log(
      'componentWillUpdate: ' +
        JSON.stringify(nextProps) +
        ' ' +
        JSON.stringify(nextState)
    );
  }

  // 컴포넌트의 업데이트가 끝났을 때
  componentDidUpdate(prevProps, prevState) {
    console.log(
      'componentDidUpdate: ' +
        JSON.stringify(prevProps) +
        ' ' +
        JSON.stringify(prevState)
    );
  }

  // 컴포넌트가 DOM 에서 제거되었을 때
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <div>
        <h3>{this.state.hello}</h3>
        <button onClick={this.Change}>Change</button>
      </div>
    );
  }
}

export default LifeCycle;
