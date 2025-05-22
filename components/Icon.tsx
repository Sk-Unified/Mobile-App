// DynamicIcon.tsx
import React from 'react';

import type { IconProps } from 'phosphor-react-native';
import PhosphorIcons from '@/utils/PhosphorIcons';

type IconName = keyof typeof PhosphorIcons;

type IconType = {
  name: keyof typeof PhosphorIcons;
  weight: 'regular' | 'fill' | 'duotone';
  size: number;
  color: string;
};

interface DynamicIconProps extends IconProps {
  name: IconName;
}

const DynamicIcon = ({ name, ...rest }: DynamicIconProps) => {
  const IconComponent = PhosphorIcons[name] as React.ComponentType<IconProps>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" does not exist in Phosphor icon set.`);
    return null;
  }

  return <IconComponent {...rest} />;
};

export const Icon = ({ color, size = 16, weight = 'duotone', name }: IconType) => {
  return <DynamicIcon name={name} color={color} size={size} weight={weight} />;
};
