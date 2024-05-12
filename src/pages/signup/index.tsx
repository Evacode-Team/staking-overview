import NextLink from 'next/link';

import { UnauthorizedLayout } from '@/core/layouts';

import { Box, Heading, Logo, Text, VStack, HStack, Link } from '@/shared/ui';
import { RegistationForm } from '@/features/auth';

const SignUpPage = () => {
  return (
    <Box p="9% 25%">
      <VStack gap="60px" justifyContent="start" align="start" w="100%">
        <Logo />

        <VStack gap="47px" w="100%">
          {/* Start - Head */}
          <VStack gap="5px" w="100%">
            <Heading variant="h1" w="100%">
              Sign up
            </Heading>
            <Text variant="sub" w="100%">
              Before we start, please enter your personal data.
            </Text>
          </VStack>
          {/* End - Head */}

          <RegistationForm />

          {/* Start - Footer */}
          <HStack gap="8px">
            <Text variant="subBlack">Already registered?</Text>
            <Link as={NextLink} href="/login" variant="primary">
              Sign in
            </Link>
          </HStack>
          {/* End - Footer */}
        </VStack>
      </VStack>
    </Box>
  );
};

SignUpPage.getLayout = (page) => (
  <UnauthorizedLayout title="Регистрация">
    <Box marginY={{ base: 4, sm: 0 }}>{page}</Box>
  </UnauthorizedLayout>
);

export default SignUpPage;
