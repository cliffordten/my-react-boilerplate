import { Role, RoleResetPassword } from '../types.redux';

export const roleLoginReducer = (state = {}, action) => {
    switch (action.type) {
    case Role.ROLE_LOGIN_REQUEST:
        return { loading: true };
    case Role.ROLE_LOGIN_SUCCESS:
        return { loading: false, roleInfo: action.payload };
    case Role.ROLE_LOGIN_FAIL:
        return { loading: false, error: action.payload };
    case Role.ROLE_LOGOUT:
        return {};
    default:
        return state;
    }
};

export const roleResetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
    case RoleResetPassword.ROLE_RESET_PASSWORD_REQUEST:
        return { loading: true };
    case RoleResetPassword.ROLE_RESET_PASSWORD_SUCCESS:
        return { loading: false, reset: action.payload };
    case RoleResetPassword.ROLE_RESET_PASSWORD_FAIL:
        return { loading: false, error: action.payload };
    default:
        return state;
    }
};
