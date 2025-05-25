import { createNavigationContainerRef } from '@react-navigation/native';

type navigationProps = {
  name: string;
  params?: object;
};

export type navigationParams = {
  [key: string]: object | undefined;
};

export const navigationRef = createNavigationContainerRef<navigationParams>();

export function navigateTo({ name, params }: navigationProps) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
