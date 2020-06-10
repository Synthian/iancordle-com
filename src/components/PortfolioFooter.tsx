import React from 'react';
import { Flex, Icon } from '@chakra-ui/core';

const PortfolioFooter: React.FC = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} fontSize={'3xl'} pt={8} pb={4}>
      <a href={'https://www.github.com/synthian'}>
        <Icon name={'github'} />
      </a>
      <a href={'https://www.linkedin.com/in/ian-cordle-5ab1361a2/'}>
        <Icon name={'linkedin'} ml={2} />
      </a>
    </Flex>
  );
};

export default PortfolioFooter;
