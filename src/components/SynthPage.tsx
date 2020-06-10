import React from 'react';
import BasePage, { BasePageProps } from './BasePage';
import { Flex, Box, Divider } from '@chakra-ui/core';
import { SIZES } from '../styles/theme';
import SynthHeader from './SynthHeader';
import SynthFooter from './SynthFooter';

const SynthPage: React.FC<BasePageProps> = (props) => {
  return (
    <BasePage title={`Synth${props.title ? ' | ' : ''}${props.title}`}>
      <SynthHeader maxW={SIZES.pageMaxWidth} px={SIZES.pagePadding} />
      <Flex direction={'column'} alignItems={'center'} maxW={SIZES.pageMaxWidth} m={'auto'} px={SIZES.pagePadding}>
        <Box w={'100%'}>{props.children}</Box>
        <SynthFooter />
      </Flex>
    </BasePage>
  );
};

export default SynthPage;
