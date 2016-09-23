import React from 'react';
import {render} from 'react-dom';


import Routers from './Routers.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import './code.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
render(<Routers />,document.getElementById('root'));
