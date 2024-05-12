import { defineStyleConfig, defineStyle } from '@chakra-ui/react';

export const h1 = defineStyle({
  fontSize: 'h1',
  lineHeight: '1.3',
});

export const h1Bold = defineStyle({
  ...h1,
  fontWeight: '800',
});

export const h2 = defineStyle({
  fontSize: 'h2',
  lineHeight: '1.3',
});
export const h2Bold = defineStyle({
  ...h2,
  fontWeight: '800',
});

export const h3 = defineStyle({
  fontSize: 'h3',
  lineHeight: '1.3',
});

export const h3Bold = defineStyle({
  ...h3,
  fontWeight: '800',
});

export const h4 = defineStyle({
  fontSize: 'h4',
  lineHeight: '1.3',
});
export const h4Bold = defineStyle({
  ...h4,
  fontWeight: '800',
});

export const h5 = defineStyle({
  fontSize: 'h6',
  lineHeight: '1.3',
});
export const h5Bold = defineStyle({
  ...h4,
  fontWeight: '800',
});

export const h6 = defineStyle({
  fontSize: 'h6',
  lineHeight: '1.3',
});
export const h6Bold = defineStyle({
  ...h4,
  fontWeight: '800',
});

export const Heading = defineStyleConfig({
  variants: { h1, h1Bold, h2, h2Bold, h3, h3Bold, h4, h4Bold },
});
