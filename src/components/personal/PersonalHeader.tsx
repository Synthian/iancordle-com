import React from 'react';
import { Box, Button, Image } from '@chakra-ui/core';
import Link from 'next/link';
import BaseHeader, { BaseHeaderProps } from '../BaseHeader';

const PersonalHeader: React.FC<BaseHeaderProps> = (props) => {
  return (
    <BaseHeader {...props}>
      <Link href={'/'} passHref>
        <a>
          <Image src={'/img/ic-icon-transparent-256.png'} alt={'IC'} size={'60px'} />
        </a>
      </Link>
      <Box flex={1} />
      <Link href={'/personal/blog'} passHref>
        <Button as={'a'} variant={'ghost'}>
          Blog
        </Button>
      </Link>
      <Link href={'/personal/crosswords'} passHref>
        <Button as={'a'} variant={'ghost'}>
          Crosswords
        </Button>
      </Link>
    </BaseHeader>
  );
};

export default PersonalHeader;
