// import { auth } from './firebase.config';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const authService = {
    login: async (email: string, password: string) => {
        // return signInWithEmailAndPassword(auth, email, password);
        console.log('Login', email);
        return Promise.resolve({ user: { id: '1', email } });
    },
    register: async (email: string, password: string) => {
        // return createUserWithEmailAndPassword(auth, email, password);
        console.log('Register', email);
        return Promise.resolve({ user: { id: '1', email } });
    },
    logout: async () => {
        // return signOut(auth);
        console.log('Logout');
        return Promise.resolve();
    }
};
