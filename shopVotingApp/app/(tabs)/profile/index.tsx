import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '@/src/components/common/AppButton';
import { useAuth } from '@/src/context/auth/AuthContext';
import { authService } from '@/src/api/firebase/auth.service';
import { colors } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
    const { state, dispatch } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await authService.logout();
        dispatch({ type: 'LOGOUT' });
        router.replace('/(auth)/login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.info}>Email: {state.user?.email || 'Guest'}</Text>
            <AppButton title="Logout" onPress={handleLogout} variant="secondary" style={styles.button} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.m,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: spacing.l,
        color: colors.primary,
    },
    info: {
        fontSize: 18,
        marginBottom: spacing.xl,
    },
    button: {
        width: '100%',
    },
});
