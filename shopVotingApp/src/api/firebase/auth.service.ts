import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    User as FirebaseUser
} from 'firebase/auth';
import { auth } from '@/src/config/firebase';
import { User } from '@/src/models/User';

const mapFirebaseUser = (firebaseUser: FirebaseUser): User => {
    return {
        id: firebaseUser.uid,
        email: firebaseUser.email || '',
        name: firebaseUser.displayName || undefined,
        avatarUrl: firebaseUser.photoURL || undefined,
    };
};

export const authService = {
    login: async (email: string, password: string): Promise<{ user: User }> => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { user: mapFirebaseUser(userCredential.user) };
    },

    register: async (email: string, password: string): Promise<{ user: User }> => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { user: mapFirebaseUser(userCredential.user) };
    },

    logout: async (): Promise<void> => {
        await signOut(auth);
    }
};
