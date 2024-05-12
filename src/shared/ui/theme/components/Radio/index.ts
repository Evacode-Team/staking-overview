import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys)

const baseStyle = definePartsStyle({
  label: {
    fontSize: '12px',
    fontWeight: '700',
  },
  control: {
    borderRadius: '12px',
    borderColor: 'grey.light',
    w: '20px',
    h: '20px',
    
    _checked: {
      borderColor: 'primary.blue',
      bg: 'primary.blue',
    },

    _hover: {
      borderColor: 'primary.blue',
      bg: 'primary.blue',
    }
  },

  
})

export const Radio = defineMultiStyleConfig({ baseStyle })