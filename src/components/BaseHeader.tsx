import React from 'react';
import { Flex, useTheme } from '@chakra-ui/core';

export interface BaseHeaderProps {
  maxW: string;
  px: number;
  bg: string;
}

const BaseHeader: React.FC<BaseHeaderProps> = (props) => {
  const theme = useTheme();

  return (
    <Flex position={'sticky'} bg={props.bg} zIndex={theme.zIndices.sticky} top={0} maxW={props.maxW} px={props.px} py={4} margin={'auto'} alignItems={'center'}>
      {props.children}
    </Flex>
  );
};

export default BaseHeader;
