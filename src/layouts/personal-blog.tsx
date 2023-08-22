import React from 'react';
import { MdxTemplate, PersonalBlogFrontMatter } from '../types/MdxTemplates';
import PersonalPage from '../components/personal/PersonalPage';
import { Heading, Flex, Text } from '@chakra-ui/core';
import { PALETTE } from '../styles/theme';
import { stringFromDate } from '../components/personal/PersonalBlogPosts';

const PersonalBlogTemplate: MdxTemplate = ({ frontMatter, children }) => {
  const fm = frontMatter as PersonalBlogFrontMatter;
  const date = new Date(fm.date);
  const dateString = stringFromDate(date);

  return (
    <>
      <PersonalPage title={fm.title}>
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
      </PersonalPage>
    </>
  );
};

export default PersonalBlogTemplate;
