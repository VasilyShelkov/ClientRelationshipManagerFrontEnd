import React from 'react';
import NameBox from './components/NameBox';

import 'jquery';
import 'hammerjs';
import 'materializeJS';
import 'materializeCSS';

import './home.css';

React.render(
<NameBox accountId="1"/>,
    document.getElementById('names')
);
