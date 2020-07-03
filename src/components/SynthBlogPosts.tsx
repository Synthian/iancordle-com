import React from 'react';
import { Flex, Heading, Text, Box } from '@chakra-ui/core';

// noinspection ES6PreferShortImport
import { frontMatter } from '../pages/synth/blog/**/*.mdx';
import { SynthBlogFrontMatter } from '../types/MdxTemplates';
import Link from 'next/link';
import { PALETTE } from '../styles/theme';

function getLinkFromResourcePath(resourcePath: string) {
  resourcePath = resourcePath.replace(/\\/g, '/');
  return resourcePath.substring(resourcePath.indexOf('/pages') + 6, resourcePath.indexOf('.mdx'));
}

export function stringFromDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

const SynthBlogPosts: React.FC = () => {
  const blogPosts = (frontMatter as SynthBlogFrontMatter[]).sort((afm, bfm) => {
    const a = new Date(afm.date);
    const b = new Date(bfm.date);
    return a > b ? -1 : 1;
  });

  return (
    <Flex direction={'column'}>
      {blogPosts.map((post) => (
        <Link key={post.title} href={getLinkFromResourcePath(post.__resourcePath)} passHref>
          <a>
            <Box mb={6}>
              <Heading as={'h3'} size={'lg'}>
                {post.title}
              </Heading>
              <Text color={PALETTE.secondaryText} as={'i'}>
                {post.author} - {stringFromDate(new Date(post.date))}
              </Text>
              <Text color={PALETTE.secondaryText} as={'p'}>
                {post.blurb}
              </Text>
            </Box>
          </a>
        </Link>
      ))}
    </Flex>
  );
};

export default SynthBlogPosts;
