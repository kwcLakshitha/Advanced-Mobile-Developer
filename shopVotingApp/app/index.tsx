  import { Redirect } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAuth } from '@/src/context/auth/AuthContext';
import { useEffect, useState } from 'react';
import { colors } from '@/src/theme/colors';

export default function Index() {
    const { state } = useAuth();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    if (state.isAuthenticated) {
        return <Redirect href="/(tabs)/home" />;
    }

    
    return <Redirect href="/(auth)/login" />;
}
