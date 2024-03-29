import React, { ReactNode } from 'react';

export interface FrontMatterBase {
  title: string;
}

export interface PersonalBlogFrontMatter extends FrontMatterBase {
  date: string;
  author: string;
  blurb: string;
  __resourcePath: string;
}

export type FrontMatter = FrontMatterBase | PersonalBlogFrontMatter;

interface MdxTemplateProps {
  children?: ReactNode;
  frontMatter: FrontMatter;
}

export type MdxTemplate = (props: MdxTemplateProps) => React.ReactNode;
