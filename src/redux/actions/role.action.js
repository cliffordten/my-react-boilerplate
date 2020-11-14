import { Role, RoleResetPassword } from '../types.redux';

export const loginAction = () => async dispatch => {
    try {
        dispatch({
            type: Role.ROLE_LOGIN_REQUEST
        });
    } catch (error) {
        dispatch({
            type: Role.ROLE_LOGIN_FAIL,
            payload: error
        });
    }
};

export const roleResetPasswordAction = () => async dispatch => {
    try {
        dispatch({
            type: RoleResetPassword.ROLE_RESET_PASSWORD_REQUEST
        });
    } catch (error) {
        dispatch({
            type: RoleResetPassword.ROLE_RESET_PASSWORD_FAIL,
            payload: error
        });
    }
};
