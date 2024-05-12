import NextLink from 'next/link';

import { UnauthorizedLayout } from '@/core/layouts';

import { Box, Heading, Logo, Text, VStack, HStack, Link } from '@/shared/ui';
import { RecoveryForm } from '@/features/auth';

const ResetPasswordPage = () => {
  return (
    <Box p="9% 25%">
      <VStack gap="60px" justifyContent="start" align="start" w="100%">
        <Logo />

        <VStack gap="47px" w="100%">
          {/* Start - Head */}
          <VStack gap="5px" w="100%">
            <Heading variant="h1" w="100%">
              Forgot password?
            </Heading>
            <Text variant="sub" w="100%">
              Enter your email below, you will receive an email with instructions on how to reset your password in a few
              minutes. You can also set a new password if you’ve never set one before.
            </Text>
          </VStack>
          {/* End - Head */}

          <RecoveryForm />

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

ResetPasswordPage.getLayout = (page) => (
  <UnauthorizedLayout title="Reset password">
    <Box marginY={{ base: 4, sm: 0 }}>{page}</Box>
  </UnauthorizedLayout>
);

export default ResetPasswordPage;
