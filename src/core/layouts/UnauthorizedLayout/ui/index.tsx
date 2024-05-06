import Head from 'next/head';
import Image from 'next/image';

import { Text, Box, TwoSideLayout, useStyleConfig, Flex } from '@/shared/ui';
import { META_TITLE } from '@/shared/constants';
import type { UnauthorizedLayoutProps } from '../types';
import { bgGradiet, mockup } from '../../../../../public/images';

export const UnauthorizedLayout = (props: UnauthorizedLayoutProps) => {
  const { title, children } = props;
  const fullTitle = !title && META_TITLE;

  const styles = useStyleConfig('container')

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <TwoSideLayout
        leftSideChildren={(
            <Box p="40px 150px">Что-то на непонятном</Box>
        )}
        rightSideChildren={(
            <Flex justify="center" align="center">
                <Image src={bgGradiet} alt='bg' />
                <Image src={mockup} alt='mockup' style={{position: "absolute", maxWidth: '470px'}} />
            </Flex>
        )}
      />
    </>
  );
};
