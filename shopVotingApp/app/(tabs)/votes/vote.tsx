import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '@/src/components/common/AppButton';
import { colors } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';
import { useLocalSearchParams } from 'expo-router';

export default function VoteScreen() {
    const params = useLocalSearchParams();
    const shopId = params.shopId as string;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vote for Shop {shopId}</Text>
            <Text style={styles.subtitle}>Select a rating:</Text>
            <View style={styles.buttons}>
                {[1, 2, 3, 4, 5].map((rating) => (
                    <AppButton
                        key={rating}
                        title={rating.toString()}
                        onPress={() => console.log('Voted', rating)}
                        style={styles.ratingBtn}
                        variant="outline"
                    />
                ))}
            </View>
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
        marginBottom: spacing.m,
        color: colors.primary,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: spacing.m,
    },
    buttons: {
        flexDirection: 'row',
        gap: spacing.s,
    },
    ratingBtn: {
        minWidth: 50,
    }
});
