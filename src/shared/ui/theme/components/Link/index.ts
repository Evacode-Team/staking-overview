import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  color: 'primary.blue',
  fontWeight: '700',
  fontSize: 'span',
});

export const Link = defineStyleConfig({
  variants: { primary },
});
