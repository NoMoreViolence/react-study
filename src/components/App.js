import React from 'react';
import ReactDOM from 'react-dom';
/*
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
*/

class App extends React.Component {
  /*
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
  */

  render() {
    return <Contacts />;
    /*
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
    */
  }
}

class Contacts extends React.Component {
  // state 생성 데이터 파일
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        { name: 'Abet', phone: '010-0000-0001' },
        { name: 'Betty', phone: '010-0000-0002' },
        { name: 'Charlie', phone: '010-0000-0003' },
        { name: 'David', phone: '010-0000-0004' }
      ]
    };
  }

  render() {
    // map으로 감싸서 한개씩 이름 전화부 생성
    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          {this.state.contactData.map(contact => {
            return (
              // props.name /// props.phone
              <ContactInfo name={contact.name} phone={contact.phone} />
            );
          })}
        </ul>
      </div>
    );
  }
}

// 전화번호 이름 레이아웃
class ContactInfo extends React.Component {
  render() {
    return (
      <li>
        {this.props.name} {this.props.phone}
      </li>
    );
  }
}
/*
App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
};
*/

export default App;
