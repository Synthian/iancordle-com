import React from 'react';
import { MdxTemplate } from '../types/MdxTemplates';
import SynthPage from '../components/synth/SynthPage';

const SynthTemplate: MdxTemplate = ({ frontMatter, children }) => {
  return (
    <>
      <SynthPage title={frontMatter.title}>{children}</SynthPage>
    </>
  );
};

export default SynthTemplate;
