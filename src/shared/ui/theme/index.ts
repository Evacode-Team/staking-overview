import { extendTheme, Box } from '@chakra-ui/react';

// import styles from './styles';
import * as components from './components';
import * as layout from './layout';
import * as overrides from './overrides';

// import layerStyles from './layerStyles';
// import radii from './radii';
// import space from './space';
// import breakpoints from './breakpoints';
// import fonts from './fonts';
// import fontSizes from './fontSizes';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  // styles,
  components: {
    ...layout,
    ...components,
  },
  ...overrides,
});
