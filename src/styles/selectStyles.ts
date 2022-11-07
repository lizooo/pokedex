import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const withShadow = definePartsStyle({
  field: {
    h: '60px',
    border: 0,
    boxShadow: '4px 4px 1px rgba(0, 67, 192, 0.42)',
    rounded: 'md',
    _focus: {
      ring: '1px',
      ringColor: 'blue.400',
      ringOffset: '2px',
      ringOffsetColor: 'blue.200',
    }
  },
  icon: {
    color: 'blue.400',
  }
});

export const selectTheme = defineMultiStyleConfig({
  variants: { withShadow }
});
