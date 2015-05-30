import React from 'react';
import NameBox from './components/NameBox';

import './home.css'

import 'jquery';
import 'hammerjs';
import 'materializeJS';
import 'materializeCSS';

React.render(
<NameBox accountId="1"/>,
    document.getElementById('names')
);
