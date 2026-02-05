import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface AppButtonProps extends TouchableOpacityProps {
    title: string;
    loading?: boolean;
    variant?: 'primary' | 'secondary' | 'outline';
}

export default function AppButton({ title, loading, variant = 'primary', style, ...props }: AppButtonProps) {
    const getBackgroundColor = () => {
        if (variant === 'outline') return 'transparent';
        if (variant === 'secondary') return colors.secondary;
        return colors.primary;
    };

    const getTextColor = () => {
        if (variant === 'outline') return colors.primary;
        return colors.white;
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor: getBackgroundColor() },
                variant === 'outline' && styles.outline,
                style,
            ]}
            disabled={loading || props.disabled}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={getTextColor()} />
            ) : (
                <Text style={[styles.text, { color: getTextColor() }]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: spacing.m,
        paddingHorizontal: spacing.l,
        borderRadius: spacing.s,
        alignItems: 'center',
        justifyContent: 'center',
    },
    outline: {
        borderWidth: 1,
        borderColor: colors.primary,
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
    },
});
