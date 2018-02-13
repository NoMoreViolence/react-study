// 모듈 불러오기
import React from 'react';
import ReactDOM from 'react-dom';

class RandomNumber extends React.Component {
  // 숫자 불러오는 것
  updateNumber() {
    // 숫자
    let value = Math.round(Math.random() * 100);
    // onUpdate: function 형태의 prop 으로서, parent 컴포넌트에 정의된 메소드를 실행 할 수 있게 합니다. 이게 없으면 버튼 눌러도 변경되지 않는다
    this.props.onUpdate(value);
  }

  constructor(props) {
    super(props);
    // 바인딩을 시켜줘야 리액트 컴포넌트 상속받을수 있다
    this.updateNumber = this.updateNumber.bind(this);
  }

  render() {
    // this.props.number의 초기값은 정해지지 않은 상태
    // this.
    return (
      <div>
        <h1>RANDOM NUMBER: {this.props.number}</h1>
        <button onClick={this.updateNumber}>Randomize</button>
      </div>
    );
  }
}

export default RandomNumber;
