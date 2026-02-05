import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Shop } from '../../models/Shop'; // Make sure path is correct; used ../../models/Shop in other files, checking relative.
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface ShopCardProps {
    shop: Shop;
    onPress: () => void;
}

export default function ShopCard({ shop, onPress }: ShopCardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            {shop.imageUrl && (
                <Image source={{ uri: shop.imageUrl }} style={styles.image} resizeMode="cover" />
            )}
            <View style={styles.content}>
                <Text style={styles.name}>{shop.name}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {shop.description}
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.rating}>⭐ {shop.rating.toFixed(1)}</Text>
                    <Text style={styles.votes}>({shop.voteCount} votes)</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: spacing.s,
        marginBottom: spacing.m,
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 150,
    },
    content: {
        padding: spacing.m,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: spacing.xs,
        color: colors.text,
    },
    description: {
        fontSize: 14,
        color: colors.textSecondary,
        marginBottom: spacing.s,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontWeight: 'bold',
        marginRight: spacing.s,
        color: colors.primary,
    },
    votes: {
        color: colors.textSecondary,
        fontSize: 12,
    },
});
