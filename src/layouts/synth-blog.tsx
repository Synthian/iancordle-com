import React from 'react';
import { MdxTemplate, SynthBlogFrontMatter } from '../types/MdxTemplates';
import SynthPage from '../components/synth/SynthPage';
import { Heading, Flex, Text } from '@chakra-ui/core';
import { PALETTE } from '../styles/theme';
import { stringFromDate } from '../components/synth/SynthBlogPosts';

const SynthBlogTemplate: MdxTemplate = (frontMatter) => {
  const fm = frontMatter as SynthBlogFrontMatter;
  const date = new Date(fm.date);
  const dateString = stringFromDate(date);

  return ({ children }) => (
    <>
      <SynthPage title={fm.title}>
        <Heading as={'h1'} fontSize={'5xl'} mt={5} mb={1}>
          {fm.title}
        </Heading>
        <Flex alignItems={'center'} w={'100%'} mb={12}>
          <Text color={PALETTE.secondaryText} as={'i'} flex={1}>
            by {fm.author}
          </Text>
          <Text color={PALETTE.secondaryText} as={'i'}>
            {dateString}
          </Text>
        </Flex>
        {children}
      </SynthPage>
    </>
  );
};

export default SynthBlogTemplate;
