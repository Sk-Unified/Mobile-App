import React from 'react';

import { StyleProp, View, ViewStyle } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

type containerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Container = ({ children, style }: containerProps) => {
  return (
    <View style={[styles.container, style]}>
      <StatusBar style="auto" />
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));

export default Container;
