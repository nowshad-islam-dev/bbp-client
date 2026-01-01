import { useEffect } from 'react';
import { useAppDispatch } from './redux';
import { useRefreshTokenMutation } from '@/store/api/apiSlice';
import { logout, setCredentials } from '@/store/features/authSlice';

export const useAuthBootstrap = () => {
    const dispatch = useAppDispatch();
    const [refreshToken] = useRefreshTokenMutation();

    useEffect(() => {
        refreshToken()
            .unwrap()
            .then((data) => {
                dispatch(setCredentials(data));
            })
            .catch((err) => {
                console.error(err);
                dispatch(logout());
            });
    }, [dispatch, refreshToken]);
};
