import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor 생성됨');

    this.state = {
      hello: '난 state'
    };
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
  render() {
    return (
      <div>
        <h3>{this.state.hello}</h3>
      </div>
    );
  }
}

export default LifeCycle;
