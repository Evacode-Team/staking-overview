import NextLink from 'next/link';

import { UnauthorizedLayout } from '@/core/layouts';

import { Box, Heading, Logo, Text, VStack, HStack, Link } from '@/shared/ui';
import { LoginForm } from '@/features/auth';

const LoginPage = () => {
  return (
    <Box p="9% 25%">
      <VStack gap="60px" justifyContent="start" align="start" w="100%">
        <Logo />

        <VStack gap="47px" w="100%">
          {/* Start - Head */}
          <VStack gap="5px" w="100%">
            <Heading variant="h1" w="100%">
              Sign in
            </Heading>
            <Text variant="sub" w="100%">
              Enter your account details.
            </Text>
          </VStack>
          {/* End - Head */}

          <LoginForm />

          {/* Start - Footer */}
          <HStack gap="8px">
            <Text variant="subBlack">You don’t have an account?</Text>
            <Link as={NextLink} href="/signup" variant="primary">
              Create an account
            </Link>
          </HStack>
          {/* End - Footer */}
        </VStack>
      </VStack>
    </Box>
  );
};

LoginPage.getLayout = (page) => (
  <UnauthorizedLayout title="Авторизация">
    <Box marginY={{ base: 4, sm: 0 }}>{page}</Box>
  </UnauthorizedLayout>
);

export default LoginPage;
