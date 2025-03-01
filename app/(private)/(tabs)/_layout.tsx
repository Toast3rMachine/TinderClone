import { Redirect, Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import useUserStore from '@/store/user.store';
import { getValueFor } from '@/lib/utils/secure_store';

export default function TabLayout() {

  const platform = Platform.OS;
  // État d'authentification global
  const { isAuthenticated, setAuthenticated }: any = useUserStore();
  // État local pour gérer le chargement initial
  const [isReady, setIsReady] = useState(false);

  // Fonction pour vérifier si l'utilisateur est déjà authentifié
  const checkIfUserIsAlreadyAuthenticated = async () => {
    
    let isAuthenticated;

    if (platform !== "web"){
      isAuthenticated = await getValueFor("isAuthenticated");
    } else {
      isAuthenticated = localStorage.getItem("token");
    }

    if (isAuthenticated) {
      setAuthenticated(true);
    }
    setIsReady(true);
  };

  // Effect pour vérifier l'authentification au chargement
  useEffect(() => {
    if (!isAuthenticated) {
      checkIfUserIsAlreadyAuthenticated();
    }
  }, [isAuthenticated]);

  // Redirection vers la page de login si non authentifié
  if (!isAuthenticated && isReady) {
    return <Redirect href="/(public)/login" />;
  }

  if (isAuthenticated){
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Matches',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );}
}
