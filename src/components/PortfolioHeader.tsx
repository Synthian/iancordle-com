import React from 'react';
import { Box, Button, Image } from '@chakra-ui/core';
import Link from 'next/link';
import BaseHeader, { BaseHeaderProps } from './BaseHeader';

const PortfolioHeader: React.FC<BaseHeaderProps> = (props) => {
  return (
    <BaseHeader {...props}>
      <Link href={'/'} passHref>
        <a>
          <Image src={'/img/ic-icon-transparent-256.png'} alt={'IC'} size={'60px'} />
        </a>
      </Link>
      <Box flex={1} />
      <Link href={'/'} passHref>
        <Button as={'a'} variant={'ghost'}>
          Home
        </Button>
      </Link>
      <Link href={'/experience'} passHref>
        <Button as={'a'} variant={'ghost'}>
          Experience
        </Button>
      </Link>
      <Link href={'/projects'} passHref>
        <Button as={'a'} variant={'ghost'}>
          Projects
        </Button>
      </Link>
      <Link href={'/synth'} passHref>
        <Button as={'a'} variant={'ghost'}>
          Synth
        </Button>
      </Link>
    </BaseHeader>
  );
};

export default PortfolioHeader;
