import React from 'react';
import BasePage, { BasePageProps } from './BasePage';
import PortfolioHeader from './PortfolioHeader';
import { Flex, Box, Divider } from '@chakra-ui/core';
import { SIZES } from '../styles/theme';
import PortfolioFooter from './PortfolioFooter';

const PortfolioPage: React.FC<BasePageProps> = (props) => {
  return (
    <BasePage title={`IC${props.title ? ' | ' : ''}${props.title}`}>
      <PortfolioHeader maxW={SIZES.pageMaxWidth} px={SIZES.pagePadding} />
      <Flex direction={'column'} alignItems={'center'} maxW={SIZES.pageMaxWidth} m={'auto'} px={SIZES.pagePadding}>
        <Box w={'100%'}>{props.children}</Box>
        <PortfolioFooter />
      </Flex>
    </BasePage>
  );
};

export default PortfolioPage;
