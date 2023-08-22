import React from 'react';
import { Flex, Icon } from '@chakra-ui/core';

const PersonalFooter: React.FC = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} fontSize={'3xl'} pt={8} pb={4}>
      <a href={'https://www.twitch.tv/iansynth'}>
        <Icon name={'twitch'} />
      </a>
      <a href={'https://www.youtube.com/valentinoian'}>
        <Icon name={'youtube'} ml={2} />
      </a>
      <a href={'https://www.speedrun.com/user/IanSynth'}>
        <Icon name={'trophy'} ml={2} />
      </a>
    </Flex>
  );
};

export default PersonalFooter;
