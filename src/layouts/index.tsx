import React from 'react';
import { MdxTemplate } from '../types/MdxTemplates';
import PortfolioPage from '../components/portfolio/PortfolioPage';

const PortfolioTemplate: MdxTemplate = ({ frontMatter, children }) => {
  return (
    <>
      <PortfolioPage title={frontMatter.title}>{children}</PortfolioPage>
    </>
  );
};

export default PortfolioTemplate;
