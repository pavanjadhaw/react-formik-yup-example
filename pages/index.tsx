import {
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Card } from '../components/card';
import { Link } from '../components/link';
import { LoginForm } from '../components/login-form-with-formik';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue('gray.50', 'inherit')}
      minH="80vh"
      px={{ base: '4', lg: '8' }}
    >
      <Box maxW="md">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Sign in to your account
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Don&apos;t have an account?</Text>
          <Link href="#">Start free trial</Link>
        </Text>
        <Card>
          <LoginForm />
        </Card>
      </Box>
    </Flex>
  );
}

export default App;
