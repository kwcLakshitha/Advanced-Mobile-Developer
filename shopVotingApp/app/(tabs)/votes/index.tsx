import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';
import { useVote } from '@/src/context/vote/VoteContext';

export default function VotesHistoryScreen() {
    const { state } = useVote();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Vote History</Text>
            {state.votes.length === 0 ? (
                <Text style={styles.empty}>No votes yet.</Text>
            ) : (
                <FlatList
                    data={state.votes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>Shop ID: {item.shopId}</Text>
                            <Text>Rating: {item.rating}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.m,
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: spacing.m,
        color: colors.primary,
    },
    empty: {
        textAlign: 'center',
        color: colors.textSecondary,
        marginTop: spacing.xl,
    },
    item: {
        padding: spacing.m,
        backgroundColor: colors.surface,
        marginBottom: spacing.s,
        borderRadius: spacing.s,
    },
});
