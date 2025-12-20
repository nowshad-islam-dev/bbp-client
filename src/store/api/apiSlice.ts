import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';
import type { AuthRequest, AuthResponse } from '@/types/auth';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.accessToken;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),

    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, AuthRequest>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
        }),

        refreshToken: builder.mutation<AuthResponse, void>({
            query: () => ({
                url: '/auth/refresh-token',
                method: 'POST',
                credentials: 'include', // Make sure cookies are sent
            }),
        }),
    }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshTokenMutation } =
    apiSlice;
