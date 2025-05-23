import './unistyles';

import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

import RootStack from './navigation';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [loaded, error] = useFonts({
    'Lufga-Bold': require('./fonts/LufgaBold.ttf'),
    'Lufga-Semibold': require('./fonts/LufgaSemiBold.ttf'),
    'Lufga-Medium': require('./fonts/LufgaMedium.ttf'),
    'WorkSans-Regular': require('./fonts/WorkSans-Variable.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return <RootStack />;
}
