import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  bg: 'primary.blue',
  color: 'primary.white',
  w: '100%',
  border: '1px solid',
  borderRadius: 'standart',
  fontWeight: '700',
  h: '52px',

  _hover: {
    bg: 'primary.blue80',
    color: 'primary.blue',
    borderColor: 'primary.blue80',
  },
});

export const Button = defineStyleConfig({
  variants: { primary },
});
