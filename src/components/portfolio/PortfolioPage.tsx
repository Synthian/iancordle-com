import React from 'react';
import BasePage, { SubPageProps } from '../BasePage';
import PortfolioHeader from './PortfolioHeader';
import { Flex, Box } from '@chakra-ui/core';
import { PALETTE, SIZES } from '../../styles/theme';
import PortfolioFooter from './PortfolioFooter';

const PortfolioPage: React.FC<SubPageProps> = (props) => {
  return (
    <BasePage title={`IC${props.title ? ' | ' : ''}${props.title}`} bg={PALETTE.bg}>
      <PortfolioHeader maxW={SIZES.pageMaxWidth} px={SIZES.pagePadding} bg={PALETTE.bg} />
      <Flex direction={'column'} alignItems={'center'} maxW={SIZES.pageMaxWidth} m={'auto'} px={SIZES.pagePadding}>
        <Box w={'100%'}>{props.children}</Box>
        <PortfolioFooter />
      </Flex>
    </BasePage>
  );
};

export default PortfolioPage;
