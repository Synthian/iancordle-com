import React from 'react';

interface FrontMatterBase {
  title: string;
}

type FrontMatter = FrontMatterBase;

export type MdxTemplate = (frontMatter: FrontMatter) => React.FC;
