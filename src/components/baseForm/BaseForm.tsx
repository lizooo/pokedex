import {
  Box,
  BoxProps,
  Button,
  Flex,
  FlexProps,
  Heading,
  StackProps,
  VStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IBaseForm {
  onSubmit: () => void;
  children: ReactNode;
  title: string;
}

export const BaseForm = ({ children, onSubmit, title }: IBaseForm) => (
  <Flex {...FlexStyles}>
    <Box {...BoxStyles}>
      <VStack {...VStackStyles}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        {children}
        <Button type="submit" variant="rounded" onClick={onSubmit}>
          Summit
        </Button>
      </VStack>
    </Box>
  </Flex>
);

const FlexStyles: FlexProps = {
  h: '100vh',
  w: '100vw',
  align: 'center',
  justify: 'center',
  bg: 'brand.100',
};

const BoxStyles: BoxProps = {
  w: '80vw',
  maxWidth: '600px',
  rounded: 'xl',
  p: 12,
  bg: 'white',
};

const VStackStyles: StackProps = {
  spacing: 12,
};
