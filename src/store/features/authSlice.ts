import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthResponse } from '@/types/auth';
import type { AppStartListening } from '@/middlewares/listenerMiddleware';
import { apiSlice } from '@/store/api/apiSlice';

interface AuthState {
    accessToken: string | null;
    isAuthenticated: boolean;
    authChecked: boolean;
}

const initialState: AuthState = {
    accessToken: localStorage.getItem('accessToken'),
    isAuthenticated: !!localStorage.getItem('accessToken'),
    authChecked: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<AuthResponse>) {
            const { accessToken } = action.payload.data;
            state.accessToken = accessToken;
            state.isAuthenticated = true;
            state.authChecked = true;
            localStorage.setItem('accessToken', accessToken);
        },
        logout(state) {
            state.accessToken = null;
            state.isAuthenticated = false;
            state.authChecked = true;
            localStorage.removeItem('accessToken');
        },
    },
});

export const addLogoutListener = (startAppListening: AppStartListening) => {
    startAppListening({
        actionCreator: logout,
        effect: async (_, listenerApi) => {
            await listenerApi
                .dispatch(apiSlice.endpoints.logout.initiate())
                .unwrap();
        },
    });
};

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
