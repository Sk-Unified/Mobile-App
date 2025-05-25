import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useUnistyles } from 'react-native-unistyles';

import Authentication from './authNavigation';
import { navigationRef } from '@/utils/functions/navigateTo';

export type RootStackParamList = {
  AuthNavigation: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  const { theme } = useUnistyles();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="AuthNavigation"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthNavigation" component={Authentication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
