import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';
import type {
    AuthRequest,
    AuthResponse,
    RegisterRequest,
    RegisterResponse,
} from '@/types/auth';
import type { NewsResponse, SingleNewsResponse } from '@/types/news';

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

        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (info) => ({
                url: '/auth/register',
                method: 'POST',
                body: info,
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
            }),
        }),

        getNews: builder.query<NewsResponse, void>({
            query: () => '/news',
        }),

        getNewsById: builder.query<SingleNewsResponse, string>({
            query: (newsId) => `/news/${newsId}`,
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useRefreshTokenMutation,
    useGetNewsQuery,
    useGetNewsByIdQuery,
} = apiSlice;
