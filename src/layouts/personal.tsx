import React from 'react';
import { MdxTemplate } from '../types/MdxTemplates';
import PersonalPage from '../components/personal/PersonalPage';

const PersonalTemplate: MdxTemplate = ({ frontMatter, children }) => {
  return (
    <>
      <PersonalPage title={frontMatter.title}>{children}</PersonalPage>
    </>
  );
};

export default PersonalTemplate;
