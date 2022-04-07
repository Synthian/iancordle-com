import React from 'react';
import { Box, Button, Image } from '@chakra-ui/core';
import Link from 'next/link';
import BaseHeader, { BaseHeaderProps } from '../BaseHeader';

const SynthHeader: React.FC<BaseHeaderProps> = (props) => {
  return (
    <BaseHeader {...props}>
      <Link href={'/'} passHref>
        <a>
          <Image src={'/img/ic-icon-transparent-256.png'} alt={'IC'} size={'60px'} />
        </a>
      </Link>
      <Box flex={1} />
      <Link href={'/synth'} passHref>
        <Button as={'a'} variant={'ghost'}>
          Blog
        </Button>
      </Link>
      <Link href={'/synth/raids'} passHref>
        <Button as={'a'} variant={'ghost'}>
          FFXIV
        </Button>
      </Link>
    </BaseHeader>
  );
};

export default SynthHeader;
