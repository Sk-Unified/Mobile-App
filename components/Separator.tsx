import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type separatorProps = {
  text?: string;
  style?: StyleProp<ViewStyle>;
};

const Separator = ({ text, style }: separatorProps) => {
  return (
    <View style={[styles.separatorLine, style]}>
      {text && (
        <View style={styles.separatorTextContainer}>
          <Text style={styles.separatorText}>{text}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  separatorLine: {
    width: '100%',
    height: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.font.colors.placeholder,
  },

  separatorTextContainer: {
    backgroundColor: theme.colors.background,
    padding: 4,
  },

  separatorText: {
    color: '#fff',
    fontFamily: theme.font.body.fontFamily,
    fontSize: theme.font.body.fontSize,
  },
}));

export default Separator;
