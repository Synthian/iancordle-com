import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/core';
import { PALETTE } from '../styles/theme';

export interface BasePageProps extends SubPageProps {
  bg: string;
}

export interface SubPageProps {
  title: string;
}

const BasePage: React.FC<BasePageProps> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Box w={'100%'} h={'100%'} bg={props.bg} color={PALETTE.text} overflow={'auto'}>
        {props.children}
      </Box>
    </>
  );
};

export default BasePage;
