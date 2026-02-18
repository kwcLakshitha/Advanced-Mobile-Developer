import React, { createContext, useReducer, useContext, useEffect, ReactNode } from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User as FirebaseUser
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import { AuthState, AuthAction } from './auth.types';
import { authReducer, initialAuthState } from './auth.reducer';
import { User } from '../../models/User';

interface AuthContextProps {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
            if (firebaseUser) {
                const user: User = {
                    id: firebaseUser.uid,
                    email: firebaseUser.email || '',
                    name: firebaseUser.displayName || undefined,
                    avatarUrl: firebaseUser.photoURL || undefined,
                };
                dispatch({ type: 'LOGIN_SUCCESS', payload: user });
            } else {
                dispatch({ type: 'LOGOUT' });
            }
        });

        return () => unsubscribe();
    }, []);

    const login = async (email: string, password: string) => {
        dispatch({ type: 'LOGIN_START' });
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // State update handled by onAuthStateChanged
        } catch (error: any) {
            dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
            throw error;
        }
    };

    const register = async (email: string, password: string) => {
        dispatch({ type: 'REGISTER_START' });
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // State update handled by onAuthStateChanged
        } catch (error: any) {
            dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            // State update handled by onAuthStateChanged
        } catch (error: any) {
            console.error("Logout failed", error);
        }
    };

    return (
        <AuthContext.Provider value={{ state, dispatch, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
