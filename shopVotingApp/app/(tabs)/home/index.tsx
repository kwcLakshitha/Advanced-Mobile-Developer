import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useShop } from '@/src/context/shop/ShopContext';
import { shopApi } from '@/src/api/shop.api';
import ShopCard from '@/src/components/shop/ShopCard';
import Loading from '@/src/components/common/Loading';
import { useRouter } from 'expo-router';
import { colors } from '@/src/theme/colors';

export default function HomeScreen() {
  const { state, dispatch } = useShop();
  const router = useRouter();

  useEffect(() => {
    const fetchShops = async () => {
      dispatch({ type: 'FETCH_SHOPS_START' });
      try {
        const shops = await shopApi.getAllShops();
        dispatch({ type: 'FETCH_SHOPS_SUCCESS', payload: shops });
      } catch (error: any) {
        dispatch({ type: 'FETCH_SHOPS_FAILURE', payload: error.message });
      }
    };
    fetchShops();
  }, [dispatch]);

  const handleVote = (shopId: string) => {
    router.push({ pathname: '/(tabs)/votes/vote', params: { shopId } });
  };

  if (state.isLoading && state.shops.length === 0) return <Loading />;

  return (
    <View style={styles.container}>
      <FlatList
        data={state.shops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShopCard shop={item} onPress={() => handleVote(item.id)} />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>No shops available.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  list: {
    padding: 16,
  },
  empty: {
    textAlign: 'center',
    padding: 20,
  },
});
