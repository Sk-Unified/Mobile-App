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
  variant?: 'primary' | 'success' | 'error';
};

// Input component
const Input = ({
  label = 'Label',
  placeholder = 'Placeholder',
  description,
  icon,
  keyboardType = 'default',
  variant = 'primary',
}: InputProps) => {
  const { theme } = useUnistyles();

  styles.useVariants({
    color: variant,
  });

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
    paddingHorizontal: 16,
    gap: 12,
    height: 56,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,

    variants: {
      color: {
        primary: {
          backgroundColor: theme.input.default.background,
          borderColor: theme.input.default.outline,
        },
        success: {
          backgroundColor: theme.input.success.background,
          borderColor: theme.input.success.outline,
        },
        error: {
          backgroundColor: theme.input.error.background,
          borderColor: theme.input.error.outline,
        },
      },
    },
  },

  description: {
    fontFamily: theme.font.body.fontFamily,
    fontSize: theme.font.body.fontSize,
    variants: {
      color: {
        primary: {
          color: theme.input.default.outline,
          opacity: 0.5,
        },
        success: {
          color: theme.input.success.outline,
          opacity: 1,
        },
        error: {
          color: theme.input.error.outline,
          opacity: 1,
        },
      },
    },
  },
}));

export default Input;
