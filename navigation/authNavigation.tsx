import AuthScreen from '@/screens/auth/Authentication';
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
      <Stack.Screen
        name="Authentication"
        component={AuthScreen}
        options={{ headerShown: false, animation: 'ios_from_right' }}
      />
    </Stack.Navigator>
  );
};

export default Authentication;
