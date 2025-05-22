import { View, Text } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from 'screens/auth/Welcome';

export type AuthStackParamList = {
  Welcome: undefined;
  Authentication: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const Authentication = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Authentication;
