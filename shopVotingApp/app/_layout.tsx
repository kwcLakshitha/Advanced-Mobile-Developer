import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/src/utils/hooks/use-color-scheme'; // Keeping this for now, or move to src/hooks
import { AuthProvider } from '@/src/context/auth/AuthContext';
import { ShopProvider } from '@/src/context/shop/ShopContext';
import { VoteProvider } from '@/src/context/vote/VoteContext';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <ShopProvider>
        <VoteProvider>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </VoteProvider>
      </ShopProvider>
    </AuthProvider>
  );
}
