import { defineStyleConfig } from '@/shared/ui';
import { extendTheme } from '@chakra-ui/react';

const Container = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    d: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    w: '100%',
    h: '100%',
    m: '0',
    p: '0',
  },
});

export default extendTheme({
  components: {
    container: Container,
  },
});
