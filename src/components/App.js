import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import {Route} from "react-router-dom";

import HomePage from './HomePage';

library.add(faUser, faLock);

const App = () => (
    <React.Fragment>
        <Route exact path='/' component={HomePage} />
    </React.Fragment>
);

export default App;
