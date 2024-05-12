import { Grid, Box, useStyleConfig } from '@/shared/ui';

import type { TwoSideLayoutProps } from './types';

const TwoSideLayout = (props: TwoSideLayoutProps) => {
  const {leftSideChildren, rightSideChildren, variant} = props;

  const styles = useStyleConfig('TwoSideLayout', { variant })

  return <Box __css={styles}>
    <Box h="100%" overflowY="scroll">{leftSideChildren}</Box>
    <Box h="100%" overflowY="hidden">{rightSideChildren}</Box>
  </Box>
};

export default TwoSideLayout;