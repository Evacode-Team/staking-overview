import { UnauthorizedLayout } from '@/core/layouts';

import { Box, Text } from '@/shared/ui';

const LoginPage = () => {
  return <Text>Какой-то текст</Text>;
};

LoginPage.getLayout = (page) => (
  <UnauthorizedLayout title="Авторизация">
    <Box marginY={{ base: 4, sm: 0 }}>{page}</Box>
  </UnauthorizedLayout>
);

export default LoginPage;