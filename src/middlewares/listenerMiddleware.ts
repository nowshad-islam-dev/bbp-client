import { createListenerMiddleware, addListener } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '@/store/store';
import { addLogoutListener } from '@/store/features/authSlice';

export const listenerMiddleware = createListenerMiddleware();

export const startAppListening = listenerMiddleware.startListening.withTypes<
    RootState,
    AppDispatch
>();
export type AppStartListening = typeof startAppListening;

export const addAppListener = addListener.withTypes<RootState, AppDispatch>();
export type AppAddListener = typeof addAppListener;

// Add the logout listener
addLogoutListener(startAppListening);
