import { User } from '../../../_model/user';
import { AuthActionTypes, All } from './auth.actions';

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    errorMessage: string | null;
}

export const initialState: AuthState = localStorage.getItem('authState') ? JSON.parse(localStorage.getItem('authState')) : {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};

export function reducer(state = initialState, action: All): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                errorMessage: null

            };
        }
        case AuthActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                errorMessage: 'An Error occured!'
            };
        }
        case AuthActionTypes.LOGOUT: {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                errorMessage: null
            };
        }
        default: {
            return initialState;
        }
    }
}