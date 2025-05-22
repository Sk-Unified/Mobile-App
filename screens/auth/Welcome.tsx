import Button from '@/components/Button';
import Container from '@/components/Container';
import Input from '@/components/Input';
import { View } from 'react-native';

const Welcome = () => {
  return (
    <Container>
      <Button text="Home" variant="primary" rightIcon="House" />
      <Input
        label="Your Name"
        placeholder="Enter your name"
        description="your name goes in this box"
        icon="UserCircle"
        keyboardType="default"
      />
    </Container>
  );
};

export default Welcome;
