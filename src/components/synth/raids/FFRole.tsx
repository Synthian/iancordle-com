import React from 'react';
import { Box, Image, Text } from '@chakra-ui/core';
import { PALETTE } from '../../../styles/theme';

interface FFRoleProps {
  role: 'tank' | 'healer' | 'dps' | 'meleedps' | 'rangedphysdps' | 'rangedmagicdps';
  note: string;
}

const FFRole: React.FC<FFRoleProps> = (props) => {
  return (
    <Box mt={4} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <Image src={`/img/ffxiv/${props.role}.png`} alt={'Role'} size={'24px'} />
      <Text color={PALETTE.secondaryText} fontSize={'lg'} as={'p'} ml={1}>
        {props.note}
      </Text>
    </Box>
  );
};

export default FFRole;
