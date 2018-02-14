import React from 'react';
import PropTypes from 'prop-types'; // 이제 리액트에서 이걸 기본으로 넣어주지 않는다. 그래서 직접 모듈 받아와서 해야합니다.

const Content = props => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.body}</div>
    </div>
  );
};

Content.PropTypes = {
  // 이걸 위해서
  title: PropTypes.string,
  body: PropTypes.string.isRequired
};

export default Content;
