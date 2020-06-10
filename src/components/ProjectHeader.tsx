import React from 'react';
import { Flex, Heading, Icon } from '@chakra-ui/core';

interface GithubLinkProps {
  fontSize: number;
  title: string;
  subtitle: string;
  githubLink?: string;
  projectLink?: string;
}

const ProjectHeader: React.FC<GithubLinkProps> = (props) => {
  return (
    <>
      <Flex alignItems={'center'}>
        <a href={props.projectLink}>
          <Heading as={'h3'} size={'lg'} display={'inline-block'} mr={2}>
            {props.title}
          </Heading>
        </a>
        {props.githubLink && (
          <a href={props.githubLink}>
            <Icon name={'github'} fontSize={`${props.fontSize}px`} />
          </a>
        )}
      </Flex>
      <Heading as={'h5'} size={'xs'} fontWeight={400} textTransform={'uppercase'}>
        {props.subtitle}
      </Heading>
    </>
  );
};

export default ProjectHeader;
