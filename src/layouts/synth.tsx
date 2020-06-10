import React from 'react';
import { MdxTemplate } from '../types/MdxTemplates';
import SynthPage from '../components/SynthPage';

const SynthTemplate: MdxTemplate = (frontMatter) => {
  return ({ children }) => (
    <>
      <SynthPage title={frontMatter.title}>{children}</SynthPage>
    </>
  );
};

export default SynthTemplate;
