import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    fontSize: 'p',
    fontWeight: '400',
    color: 'primary.black',
  },
  variants: {
    sub: {
        fontSize: "span",
        color: 'secondary.grey'
    },
    subBlack: {
        fontSize: "span",
        color: 'primary.black'
    },
    label: {
        fontSize: 'label',
        fontWeight: '700',
        color: 'primary.black'
    }
  }
});
