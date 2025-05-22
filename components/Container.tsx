import React from "react";

import { View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native-unistyles";

type containerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: containerProps) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default Container;
