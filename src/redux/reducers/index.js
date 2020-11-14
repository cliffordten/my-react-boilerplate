import { combineReducers } from 'redux';

import {
    roleLoginReducer,
    roleResetPasswordReducer,
} from './role.reducer';

const rootReducer = combineReducers({
    roleLogin: roleLoginReducer,
    resetPassword: roleResetPasswordReducer,
});

export default rootReducer;
