import React from 'react';
import ReactDom from 'react-dom';

import Header from './containers/Header';
import Subs from './containers/Subs';

import './styles/index.styl';

ReactDom.render(
  <>
    <Header />
    <Subs />
  </>,
  document.getElementById('root')
);
