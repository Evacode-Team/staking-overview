import { extendTheme, Box } from '@chakra-ui/react'

// import styles from './styles';
// import components from './components';
import * as layout from './layout';
// import colors from './colors';
// import layerStyles from './layerStyles';
// import radii from './radii';
// import space from './space';
// import breakpoints from './breakpoints';
// import fonts from './fonts';
// import fontSizes from './fontSizes';

const config = {
  initialColorMode: "standart",
  useSystemColorMode: true,
};

const overrides = {
    config,
    // styles,
    components: {
      ...layout,
      // ...components,
    },
    // colors,
    // layerStyles,
    // radii,
    // space,
    // fonts,
    // breakpoints,
    // fontSizes,
  }
export default extendTheme(overrides);