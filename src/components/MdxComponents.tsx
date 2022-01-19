import React from 'react';
import { Box, Code, Divider, Heading, Link, Text } from '@chakra-ui/core';
import { Components } from '@mdx-js/react';
import { PALETTE } from '../styles/theme';

export const MdxComponents: Components = {
  h1: (props) => <Heading as={'h1'} size={'2xl'} fontWeight={300} my={5} {...props} />,
  h2: (props) => <Heading as={'h2'} size={'2xl'} my={5} {...props} />,
  h3: (props) => <Heading as={'h3'} size={'xl'} my={5} {...props} />,
  h4: (props) => <Heading as={'h4'} size={'xl'} fontWeight={300} my={4} {...props} />,
  h5: (props) => <Heading as={'h5'} size={'sm'} fontWeight={400} my={2} textTransform={'uppercase'} {...props} />,
  h6: (props) => <Heading as={'h6'} size={'sm'} fontWeight={300} my={1} fontStyle={'italic'} {...props} />,
  inlineCode: (props) => <Code variantColor={'orange'} {...props} />,
  code: (props) => <Code w={'100%'} my={4} p={3} {...props} />,
  p: (props) => <Text color={PALETTE.secondaryText} fontSize={'lg'} as={'p'} mt={4} {...props} />,
  ul: (props) => <Box color={PALETTE.secondaryText} as={'ul'} mt={1} pl={4} ml={2} {...props} />,
  ol: (props) => <Box color={PALETTE.secondaryText} as={'ol'} mt={1} pl={4} ml={2} {...props} />,
  li: (props) => <Box color={PALETTE.secondaryText} as={'li'} {...props} />,
  a: (props) => <Link color={PALETTE.link} {...props} />,
  hr: () => <Divider my={4} w={'100%'} />,
  blockquote: (props) => <Box borderLeft={'4px'} pl={4} {...props} />
};
