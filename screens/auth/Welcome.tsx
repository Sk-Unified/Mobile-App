import Button from '@/components/Button';
import Container from '@/components/Container';
import { Colors } from '@/styles/colors';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const Welcome = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.gradient} />
      <Text style={styles.welcomeText}>
        One App.{'\n'}Every Platform.{'\n'}
        <Text style={styles.welcomeTextSpecial}>Unified</Text>
      </Text>
      <Text style={styles.welcomeTextDescription}>
        Post, manage, and track your content across Instagram, X, and Facebook—without switching
        tabs.
      </Text>
      <Button
        text="Get Started"
        rightIcon="ArrowRight"
        variant="primary"
        style={styles.welcomeButton}
      />
    </Container>
  );
};

const styles = StyleSheet.create((theme) => ({
  gradient: {
    height: 450,
    width: 450,
    backgroundColor: Colors.primary,
    filter: [{ blur: 120 }],
    position: 'absolute',
    top: -600,
    right: -150,
    borderRadius: '100%',
    opacity: 0.5,
  },

  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'relative',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },

  welcomeText: {
    fontFamily: theme.font.xl.fontFamily,
    fontSize: theme.font.xl.fontSize,
    color: theme.button.outlined.text,
  },

  welcomeTextSpecial: {
    fontFamily: theme.font.xxl.fontFamily,
    fontSize: theme.font.xxl.fontSize,
    color: Colors.primary,
  },

  welcomeTextDescription: {
    fontFamily: theme.font.body.fontFamily,
    fontSize: theme.font.body.fontSize,
    color: theme.font.colors.description,
  },

  welcomeButton: {
    width: '100%',
  },
}));

export default Welcome;
