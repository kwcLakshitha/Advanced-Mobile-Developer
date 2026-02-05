import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View, Text } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface AppInputProps extends TextInputProps {
    label?: string;
    error?: string;
}

export default function AppInput({ label, error, style, ...props }: AppInputProps) {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[styles.input, error && styles.inputError, style]}
                placeholderTextColor={colors.textSecondary}
                {...props}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.m,
    },
    label: {
        fontSize: 14,
        color: colors.text,
        marginBottom: spacing.xs,
        fontWeight: '500',
    },
    input: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: spacing.s,
        padding: spacing.m,
        fontSize: 16,
        color: colors.text,
    },
    inputError: {
        borderColor: colors.error,
    },
    error: {
        color: colors.error,
        fontSize: 12,
        marginTop: spacing.xs,
    },
});
