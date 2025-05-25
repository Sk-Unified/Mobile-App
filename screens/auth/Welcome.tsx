import Button from '@/components/Button';
import Container from '@/components/Container';
import Separator from '@/components/Separator';
import { Colors } from '@/styles/colors';
import { navigateTo } from '@/utils/functions/navigateTo';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const Welcome = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.gradient} />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.welcomeText}>
            One App.{'\n'}Every Platform.{'\n'}
            <Text style={styles.welcomeTextSpecial}>Unified</Text>
          </Text>
          <Text style={styles.welcomeTextDescription}>
            Post, manage, and track your content across platforms—without switching apps.
          </Text>
        </View>
        <Separator />
        <View style={styles.buttonContainer}>
          <View style={styles.signInButtonWrapper}>
            <Button
              text="Login"
              variant="secondary"
              style={styles.buttons}
              onPress={() => {
                navigateTo({ name: 'Authentication' });
              }}
            />
          </View>
          <View style={styles.signUpButtonWrapper}>
            <Button
              text="Get Started"
              rightIcon="ArrowRight"
              variant="primary"
              style={styles.buttons}
              onPress={() => {
                navigateTo({ name: 'Authentication' });
              }}
            />
          </View>
        </View>
      </View>
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
    zIndex: -4,
  },

  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'relative',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },

  welcomeText: {
    fontFamily: theme.font.xl.fontFamily,
    fontSize: theme.font.xl.fontSize,
    color: theme.button.outlined.text,
  },

  welcomeTextSpecial: {
    fontFamily: theme.font.xxl.fontFamily,
    fontSize: theme.font.xxl.fontSize,
    color: Colors.light,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  welcomeTextDescription: {
    fontFamily: theme.font.body.fontFamily,
    fontSize: theme.font.body.fontSize,
    color: theme.font.colors.description,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 16,
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },

  signUpButtonWrapper: {
    flex: 7,
  },

  signInButtonWrapper: {
    flex: 3,
  },

  buttons: {
    width: '100%',
  },

  contentContainer: {
    flexDirection: 'column',
    gap: 40,
    zIndex: 2,
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

export default Welcome;
