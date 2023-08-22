import React from 'react';
import BasePage, { SubPageProps } from '../BasePage';
import { Flex, Box } from '@chakra-ui/core';
import { PALETTE, SIZES } from '../../styles/theme';
import PersonalHeader from './PersonalHeader';
import PersonalFooter from './PersonalFooter';

const PersonalPage: React.FC<SubPageProps> = (props) => {
  return (
    <BasePage title={`Personal${props.title ? ' | ' : ''}${props.title}`} bg={PALETTE.altBg}>
      <PersonalHeader maxW={SIZES.pageMaxWidth} px={SIZES.pagePadding} bg={PALETTE.altBg} />
      <Flex direction={'column'} alignItems={'center'} maxW={SIZES.pageMaxWidth} m={'auto'} px={SIZES.pagePadding}>
        <Box w={'100%'}>{props.children}</Box>
        <PersonalFooter />
      </Flex>
    </BasePage>
  );
};

export default PersonalPage;
