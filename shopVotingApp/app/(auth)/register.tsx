import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter, Link } from 'expo-router';
import AppInput from '@/src/components/common/AppInput';
import AppButton from '@/src/components/common/AppButton';
import { useAuth } from '@/src/context/auth/AuthContext';
import { authService } from '@/src/api/firebase/auth.service';
import { colors } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        setLoading(true);
        dispatch({ type: 'REGISTER_START' });
        try {
            const { user } = await authService.register(email, password);
            dispatch({ type: 'REGISTER_SUCCESS', payload: user });
            router.replace('/(tabs)/home');
        } catch (error: any) {
            dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <AppInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <AppInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <AppButton title="Register" onPress={handleRegister} loading={loading} />

            <View style={styles.footer}>
                <Text>Already have an account? </Text>
                <Link href="/(auth)/login" asChild>
                    <Text style={styles.link}>Login</Text>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.l,
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: spacing.xl,
        textAlign: 'center',
        color: colors.primary,
    },
    footer: {
        marginTop: spacing.l,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    link: {
        color: colors.primary,
        fontWeight: 'bold',
    },
});
