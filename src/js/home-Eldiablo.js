import React from 'react';
import NamesList from './components/NamesList.react';

import 'jquery';
import 'hammerjs';
import 'materializeJS';
import 'materializeCSS';

React.render(
<NamesList />,
    document.getElementById('names')
);
