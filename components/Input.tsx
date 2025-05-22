import { Text, TextInput, TextInputProps, View } from 'react-native';

import { Icon } from './Icon';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import PhosphorIcons from '@/utils/PhosphorIcons';

// Types for Input component.
type InputProps = {
  label: string;
  placeholder: string;
  icon?: keyof typeof PhosphorIcons;
  keyboardType?: TextInputProps['keyboardType'];
  description?: string;
};

// Input component
const Input = ({
  label = 'Label',
  placeholder = 'Placeholder',
  description,
  icon,
  keyboardType = 'default',
}: InputProps) => {
  const { theme } = useUnistyles();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ gap: 4 }}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType={keyboardType}
            placeholder={placeholder}
            style={styles.input}
            placeholderTextColor={theme.font.colors.placeholder}
          />
          {icon && (
            <View style={{ width: 16 }}>
              <Icon name={icon} size={16} weight="duotone" color={theme.button.secondary.icon} />
            </View>
          )}
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 12,
  },

  label: {
    fontFamily: theme.font.heading1.fontFamily,
    color: theme.button.outlined.text,
    fontSize: theme.font.heading2.fontSize,
  },

  input: {
    fontFamily: theme.font.body.fontFamily,
    fontSize: theme.font.body.fontSize,
    color: theme.button.outlined.text,
    width: '90%',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 12,
    height: 56,
    width: '100%',
    backgroundColor: theme.input.background,
    borderWidth: 1,
    borderColor: theme.input.outline,
    borderRadius: 8,
  },

  description: {
    fontFamily: theme.font.body.fontFamily,
    fontSize: theme.font.body.fontSize,
    color: theme.font.colors.description,
    opacity: 0.5,
  },
}));

export default Input;
