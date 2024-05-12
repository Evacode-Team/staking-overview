import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  label: {
    fontSize: 'span',
    fontWeight: '700',
  },
  control: {
    w: '20px',
    h: '20px',
    bg: 'grey.light',
    borderRadius: '4px',
    border: 'none',

    _hover: {
        bg: 'grey.light'
    },
    _checked: {
        bg: 'primary.blue',
        _hover: {
            bg: 'primary.blue',
        }
    }
  },
})

export const Checkbox = defineMultiStyleConfig({ baseStyle })