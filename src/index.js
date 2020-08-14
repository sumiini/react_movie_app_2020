import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// <App /> 이 부분이 component를 사용하고자 할 때, component의 형태이다. react는 component를 사용해서 html처럼 작성해야한다.
// 그래서 javascript와 html 사이의 이러한 조합을 jsx라고 부른다.
// react application은 한 번에 하나의 component만 rendering 할 수 있다.
// 그래서 모든 것은 App안에 들어가야한다. App안에서 많은 component를 넣을 수 있다.
// 그리고 이러한 component안에 더 많은 component를 import 할 수 있다.
ReactDOM.render(
    <App />,
  document.getElementById('root')
);