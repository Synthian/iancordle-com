import React from 'react';
import { MdxTemplate } from '../types/MdxTemplates';
import PortfolioPage from '../components/PortfolioPage';

const PortfolioTemplate: MdxTemplate = (frontMatter) => {
  return ({ children }) => (
    <>
      <PortfolioPage title={frontMatter.title}>{children}</PortfolioPage>
    </>
  );
};

export default PortfolioTemplate;
