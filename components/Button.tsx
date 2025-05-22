import { Pressable, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useUnistyles } from 'react-native-unistyles';

import { Icon } from './Icon';
import { ButtonStyles } from 'styles/components/button';
import PhosphorIcons from 'utils/PhosphorIcons';

// type declaration for the component
type buttonProps = {
  text?: string;
  variant?: 'primary' | 'secondary' | 'outlined' | 'danger';
  leftIcon?: keyof typeof PhosphorIcons;
  rightIcon?: keyof typeof PhosphorIcons;
  onPress?: () => void;
};
// 𝌞 Button Contents
const ButtonContents = ({
  text = 'Button',
  variant = 'primary',
  rightIcon,
  leftIcon,
}: buttonProps) => {
  ButtonStyles.useVariants({
    color: variant,
  });

  const { theme } = useUnistyles();

  const iconColorMap = {
    primary: theme.button.primary.icon,
    danger: theme.button.danger.icon,
    secondary: theme.button.secondary.icon,
    outlined: theme.button.outlined.icon,
  };

  const iconColor = iconColorMap[variant];

  return (
    <>
      {leftIcon && <Icon color={iconColor} name={leftIcon} size={24} weight="duotone" />}
      <Text style={ButtonStyles.buttonText}>{text}</Text>
      {rightIcon && <Icon color={iconColor} name={rightIcon} size={24} weight="duotone" />}
    </>
  );
};

// Main Button Component
const Button = ({ onPress, variant = 'primary', text, rightIcon, leftIcon }: buttonProps) => {
  const { theme } = useUnistyles();

  ButtonStyles.useVariants({
    borderColor: variant,
  });

  const gradientMap: Record<string, [string, string]> = {
    primary: [theme.button.primary.bgLight, theme.button.primary.bgDark],
    danger: [theme.button.danger.bgLight, theme.button.danger.bgDark],
    secondary: [theme.button.secondary.background, theme.button.secondary.background],
    outlined: ['transparent', 'transparent'],
  };

  const gradientColors = gradientMap[variant];

  return (
    <Pressable onPress={onPress}>
      <LinearGradient colors={gradientColors} style={ButtonStyles.buttonContainer}>
        <ButtonContents text={text} variant={variant} rightIcon={rightIcon} leftIcon={leftIcon} />
      </LinearGradient>
    </Pressable>
  );
};

export default Button;
