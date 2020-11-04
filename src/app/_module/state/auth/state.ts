import * as auth from './auth.reducers'

export interface AppState {
    authState: auth.AuthState
}

export const reducers = {
    authState: auth.reducer
};