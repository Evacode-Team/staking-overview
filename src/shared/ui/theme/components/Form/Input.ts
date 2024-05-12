import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const formInput = definePartsStyle({
  field: {
    fontSize: 'span',
    fontWeight: '400',
    color: 'primary.black',
    p: '21px 20px',
    borderRadius: 'standart',
    border: '1px solid',
    borderColor: 'outline.stroke',
    h: '64px'
  },
});

export const Input = defineMultiStyleConfig({ variants: { formInput } });
